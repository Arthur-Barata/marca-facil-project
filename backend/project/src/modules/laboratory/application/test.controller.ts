import { Body, Controller, Get, Post } from '@nestjs/common';
import { Laboratory } from '@prisma/client';
import { CreateLaboratoryService } from '../core/use-cases/create/create-laboratory.service';
import { FindAllLaboratoryService } from '../core/use-cases/find-all/find-all.service';
import { CreateLaboratoryRequestDto } from './dto/request/create-laboratory-request.dto';

@Controller('laboratory')
export class TestController {
  constructor(
    private createeLabService: CreateLaboratoryService,
    private readonly findAllLaboratoryService: FindAllLaboratoryService,
  ) {}

  @Post('create')
  public async test(@Body() data: CreateLaboratoryRequestDto) {
    return await this.createeLabService.execute(data);
  }

  @Get('get-all')
  public async findAll(): Promise<Laboratory[]> {
    return await this.findAllLaboratoryService.execute();
  }
}
