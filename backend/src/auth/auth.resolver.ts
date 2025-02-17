import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

import { CreateUserInput } from '../dto/create-user.input';
import { LoginUserInput } from '../dto/login-user.input';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) { }

  // ✅ Added root query to prevent GraphQL error
  @Query(() => String)
  hello() {
    return 'Hello, GraphQL is working!';
  }

  @Mutation(() => String)
  async signup(@Args('input') input: CreateUserInput) {
    await this.authService.signup(input.email, input.password);
    return 'User registered successfully';
  }

  @Mutation(() => String)
  async login(@Args('input') input: LoginUserInput) {
    const token = await this.authService.login(input.email, input.password);
    return token;
  }
}
