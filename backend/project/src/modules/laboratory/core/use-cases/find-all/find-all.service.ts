import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Laboratory } from '@prisma/client';
import { LaboratoryRepository } from 'src/modules/laboratory/datasource/repository/laboratory.repository';

@Injectable()
export class FindAllLaboratoryService {
  constructor(private readonly laboratoryRepository: LaboratoryRepository) {}

  public async execute(): Promise<Laboratory[]> {
    try {
      return await this.laboratoryRepository.findAll();
    } catch (error) {
      throw new HttpException(`message:${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
