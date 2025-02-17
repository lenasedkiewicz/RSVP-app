import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from '../models/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) { }

  /**
   * Sign up a new user.
   * @param email - User's email.
   * @param password - User's password.
   * @returns A success message.
   * @throws BadRequestException if email or password is invalid.
   */
  async signup(email: string, password: string): Promise<{ message: string }> {
    // Validate input
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    if (typeof email !== 'string' || typeof password !== 'string') {
      throw new BadRequestException('Email and password must be valid strings');
    }

    // Check if user already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const user = new this.userModel({ email, password: hashedPassword });
    await user.save();

    return { message: 'User registered successfully' };
  }

  /**
   * Log in an existing user.
   * @param email - User's email.
   * @param password - User's password.
   * @returns A JWT token.
   * @throws UnauthorizedException if credentials are invalid.
   */
  async login(email: string, password: string): Promise<{ token: string }> {
    // Validate input
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    if (typeof email !== 'string' || typeof password !== 'string') {
      throw new BadRequestException('Email and password must be valid strings');
    }

    // Find the user by email
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Compare the provided password with the hashed password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate a JWT token
    const token = this.jwtService.sign({ userId: user._id });

    return { token };
  }
}
