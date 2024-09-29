import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateLaboratoryService } from './modules/laboratory/core/use-cases/create/create-laboratory.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private laboratory: CreateLaboratoryService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
