import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserRequestDto } from 'src/modules/user/application/dto/create-user/request/create-user-request';
import { UserRepository } from 'src/modules/user/datasource/repository/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(data: CreateUserRequestDto): Promise<User> {
    try {
      return await this.userRepository.create(data);
    } catch (error) {
      throw new HttpException(`message:${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
