import { BadRequestException, Injectable } from '@nestjs/common';
import { ReservationRepository } from 'src/modules/reservation/datasource/repository/reservation.repository';

@Injectable()
export class FindAllReservationsByUserAndLabService {
  constructor(private reservationsRepository: ReservationRepository) {}

  async execute(userId: string, laboratoryId: string) {
    try {
      return await this.reservationsRepository.findAllByUserAndLab(userId, laboratoryId);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
