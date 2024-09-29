import { BadRequestException, Injectable } from '@nestjs/common';
import { ReservationRepository } from 'src/modules/reservation/datasource/repository/reservation.repository';
import { RESERVADO } from 'src/shared/constants/commom';

@Injectable()
export class FindAllReservationsAside {
  constructor(private reservationsRepository: ReservationRepository) {}

  async execute(userId: string, laboratoryId: string) {
    try {
      const reservations = await this.reservationsRepository.findAllReservationsAside(userId, laboratoryId);
      const response = reservations.map((reservation) => {
        return { text: RESERVADO, startDate: reservation.init_date, endDate: reservation.end_date };
      });
      return response;
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
