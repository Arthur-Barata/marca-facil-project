import { BadRequestException } from '@nestjs/common';
import { getHours } from 'date-fns';
import { CreateReservationRequestDto } from 'src/modules/reservation/application/dto/create/request/create-reservation-request.dto';
import { ValidationHandler } from './interface/validation-handler';

export class IsBusinessHourValidation implements ValidationHandler<CreateReservationRequestDto> {
  constructor(private nextValidation?: ValidationHandler<CreateReservationRequestDto>) {}
  public handler(data: CreateReservationRequestDto): void {
    const { init_date, end_date } = data;

    const initHour = getHours(init_date);
    const endHour = getHours(end_date);

    const invalidInit = initHour < 8 || initHour > 21;
    const invalidEnd = endHour < 9 || endHour > 22;

    if (invalidInit || invalidEnd) {
      throw new BadRequestException('Invalid Entry, init hour or end hour');
    }
    this.nextValidation?.handler(data);
  }
}
