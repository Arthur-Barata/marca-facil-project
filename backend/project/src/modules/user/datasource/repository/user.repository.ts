import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserRepository {
  private prisma = new PrismaClient();

  public async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({
      data,
    });
  }

  public async find(enrollment: string): Promise<User> {
    return await this.prisma.user.findUniqueOrThrow({ where: { enrollment } });
  }
}
