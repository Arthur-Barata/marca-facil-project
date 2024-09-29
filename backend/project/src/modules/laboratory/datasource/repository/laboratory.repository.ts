import { Injectable } from '@nestjs/common';
import { Laboratory, Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class LaboratoryRepository {
  private prisma = new PrismaClient();

  public async create(data: Prisma.LaboratoryCreateInput) {
    return await this.prisma.laboratory.create({
      data: { ...data },
    });
  }

  public async findAll(): Promise<Laboratory[]> {
    return await this.prisma.laboratory.findMany({ orderBy: { name: 'asc' } });
  }
}
