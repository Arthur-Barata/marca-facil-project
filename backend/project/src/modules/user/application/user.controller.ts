import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserService } from '../core/use-cases/create/create-user.service';
import { CreateUserRequestDto } from './dto/create-user/request/create-user-request';

@Controller('user')
export class UserController {
  constructor(public createUserService: CreateUserService) {}

  @Post('/create')
  public createUser(@Body() body: CreateUserRequestDto): Promise<User> {
    return this.createUserService.execute(body);
  }
}
