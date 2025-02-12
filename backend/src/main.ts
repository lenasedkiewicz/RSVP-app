import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS globally
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'], // Allow frontend origins
    credentials: true, // Allow cookies and auth headers
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'X-Requested-With',
      'apollo-require-preflight',
      'x-apollo-operation-name',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  });

  await app.listen(3000);
}
bootstrap();
