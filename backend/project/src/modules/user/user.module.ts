import { Module } from '@nestjs/common';
import { UserController } from './application/user.controller';
import { CreateUserService } from './core/use-cases/create/create-user.service';
import { FindUserService } from './core/use-cases/find/find-user.service';
import { UserRepository } from './datasource/repository/user.repository';

@Module({
  controllers: [UserController],
  providers: [CreateUserService, FindUserService, UserRepository],
  exports: [FindUserService, CreateUserService],
})
export class UserModule {}
