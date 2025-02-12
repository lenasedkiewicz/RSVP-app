import { Controller, Get } from '@nestjs/common';

@Controller()
export class WelcomeController {
  @Get()
  getWelcomeMessage(): string {
    return 'Welcome to the Nest.js Backend!';
  }
}
