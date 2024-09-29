import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { FindUserRequestDto } from 'src/modules/user/application/dto/find-user/request/find-user-by-enrollment-request.dto';
import { UserRepository } from 'src/modules/user/datasource/repository/user.repository';

@Injectable()
export class FindUserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(data: FindUserRequestDto): Promise<User> {
    try {
      return await this.userRepository.find(data.enrollment);
    } catch (error) {
      throw new HttpException(`message:${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
