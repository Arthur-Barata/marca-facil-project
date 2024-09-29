import { BadRequestException } from '@nestjs/common';
import { isWeekend } from 'date-fns';
import { CreateReservationRequestDto } from 'src/modules/reservation/application/dto/create/request/create-reservation-request.dto';
import { ValidationHandler } from './interface/validation-handler';

export class isWeekendDayValidation implements ValidationHandler<CreateReservationRequestDto> {
  constructor(private nextValidation?: ValidationHandler<CreateReservationRequestDto>) {}

  handler(data: CreateReservationRequestDto): void {
    const { init_date, end_date } = data;
    const weekend = isWeekend(init_date) && isWeekend(end_date);
    if (weekend) {
      throw new BadRequestException('Invalid entry, the choose date is on the weekend');
    }
    this.nextValidation?.handler(data);
  }
}
