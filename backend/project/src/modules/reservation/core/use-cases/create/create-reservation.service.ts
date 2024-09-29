import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Reservation } from '@prisma/client';
import { CreateReservationRequestDto } from 'src/modules/reservation/application/dto/create/request/create-reservation-request.dto';
import { ReservationRepository } from 'src/modules/reservation/datasource/repository/reservation.repository';
import { FindUserService } from 'src/modules/user/core/use-cases/find/find-user.service';
import { IsBusinessHourValidation } from './validations/is-business-hour';
import { IsNotPastValidation } from './validations/is-not-past';
import { isWeekendDayValidation } from './validations/is-weekend';

@Injectable()
export class CreateReservationService {
  constructor(
    private readonly reservationRepository: ReservationRepository,
    private readonly findUserService: FindUserService,
  ) {}

  validations = new IsBusinessHourValidation(new isWeekendDayValidation(new IsNotPastValidation()));

  public async execute(data: CreateReservationRequestDto): Promise<Reservation> {
    try {
      // await this.findUserService.execute({ enrollment: data.user_id });
      this.validations.handler(data);
      await this.isOverlapping(data);
      return await this.reservationRepository.create(data);
    } catch (error) {
      throw new HttpException(`message:${error}`, error.status ?? HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async isOverlapping(data: CreateReservationRequestDto): Promise<void> {
    const reservations = await this.reservationRepository.findByLabIdAndInitDate(data.laboratory_id, data.init_date);

    if (reservations?.id) {
      throw new BadRequestException('There is already a reservation on that date');
    }
  }
}
