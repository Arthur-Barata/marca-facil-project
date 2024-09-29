import { Module } from '@nestjs/common';
import { TestController } from './application/test.controller';
import { CreateLaboratoryService } from './core/use-cases/create/create-laboratory.service';
import { FindAllLaboratoryService } from './core/use-cases/find-all/find-all.service';
import { LaboratoryRepository } from './datasource/repository/laboratory.repository';

@Module({
  providers: [CreateLaboratoryService, LaboratoryRepository, FindAllLaboratoryService],
  exports: [CreateLaboratoryService],
  controllers: [TestController],
})
export class LaboratoryModule {}
