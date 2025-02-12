import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { ExampleResolver } from './example/example.resolver';
import { WelcomeController } from './welcome/welcome.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/mydb'), // Use 'mongo' as the host (Docker service name)
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [ExampleResolver],
  controllers: [WelcomeController],
})
export class AppModule { }
