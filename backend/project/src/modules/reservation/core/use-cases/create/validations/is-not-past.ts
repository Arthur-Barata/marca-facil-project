import { BadRequestException } from '@nestjs/common';
import { CreateReservationRequestDto } from 'src/modules/reservation/application/dto/create/request/create-reservation-request.dto';
import { ValidationHandler } from './interface/validation-handler';

export class IsNotPastValidation implements ValidationHandler<CreateReservationRequestDto> {
  constructor(private nextValidation?: ValidationHandler<CreateReservationRequestDto>) {}

  handler(data: CreateReservationRequestDto): void {
    const { init_date, end_date } = data;

    const initDate = new Date(init_date);
    const endDate = new Date(end_date);
    const currentDate = new Date();

    const endBeforeInit = endDate < initDate;

    const isInThePast = initDate < currentDate || endDate < currentDate;

    if (endBeforeInit) {
      throw new BadRequestException('Invalid entry, the end date is before init date');
    }
    if (isInThePast) {
      throw new BadRequestException('Invalid entry,one of the chosen dates may be in the past');
    }

    this.nextValidation?.handler(data);
  }
}
