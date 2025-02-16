import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ExampleResolver } from './example/example.resolver';
import { WelcomeController } from './welcome/welcome.controller';

import { AuthService } from './auth/auth.service';
import { AuthResolver } from './auth/auth.resolver';
import { User, UserSchema } from './models/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:27017/mydb'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      plugins: [],
      csrfPrevention: false,
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],

  providers: [AuthService, AuthResolver],
  controllers: [WelcomeController],
})
export class AppModule { }
