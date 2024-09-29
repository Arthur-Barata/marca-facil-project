import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Laboratory } from '@prisma/client';
import { CreateLaboratoryRequestDto } from 'src/modules/laboratory/application/dto/request/create-laboratory-request.dto';
import { LaboratoryRepository } from 'src/modules/laboratory/datasource/repository/laboratory.repository';

@Injectable()
export class CreateLaboratoryService {
  constructor(private laboratoryRepository: LaboratoryRepository) {}

  public async execute(data: CreateLaboratoryRequestDto): Promise<Laboratory> {
    try {
      return await this.laboratoryRepository.create(data);
    } catch (err) {
      throw new HttpException(`message:${err}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
