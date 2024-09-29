import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { ReservationController } from './application/controller/reservation.controller';
import { CreateReservationService } from './core/use-cases/create/create-reservation.service';
import { DeleteReservationService } from './core/use-cases/delete/delete-reservation.service';
import { FindAvailableReservationsService } from './core/use-cases/find-all-availabel-by-lab-id/find-by-lab-id.service';
import { FindAllReservationsByUserAndLabService } from './core/use-cases/find-all-by-user-and-lab/find-all.service';
import { FindAllReservationsAside } from './core/use-cases/find-all-reservations-aside/find-all-reservations-aside.service';
import { ReservationRepository } from './datasource/repository/reservation.repository';

@Module({
  imports: [UserModule],
  controllers: [ReservationController],
  providers: [
    CreateReservationService,
    ReservationRepository,
    FindAvailableReservationsService,
    DeleteReservationService,
    FindAllReservationsByUserAndLabService,
    FindAllReservationsAside,
  ],
})
export class ReservationModule {}
