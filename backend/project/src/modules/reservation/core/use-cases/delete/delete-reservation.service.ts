import { BadRequestException, Injectable } from '@nestjs/common';
import { ReservationRepository } from 'src/modules/reservation/datasource/repository/reservation.repository';

@Injectable()
export class DeleteReservationService {
  constructor(private reservationRepository: ReservationRepository) {}

  async execute(id: string) {
    try {
      return await this.reservationRepository.delete(id);
    } catch (error) {
      throw new BadRequestException('provided identifier doesnt exists');
    }
  }
}
