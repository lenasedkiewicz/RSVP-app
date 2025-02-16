import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateUserInput } from '../dto/create-user.input';
import { LoginUserInput } from '../dto/login-user.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) { }

  @Mutation(() => String)
  async signup(@Args('input') input: CreateUserInput) {
    await this.authService.signup(input.email, input.password);
    return 'User registered successfully';
  }

  @Mutation(() => String)
  async login(@Args('input') input: LoginUserInput) {
    const { token } = await this.authService.login(input.email, input.password);
    return token;
  }
}
