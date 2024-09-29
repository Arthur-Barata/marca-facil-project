import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateReservationService } from '../../core/use-cases/create/create-reservation.service';
import { DeleteReservationService } from '../../core/use-cases/delete/delete-reservation.service';
import { FindAvailableReservationsService } from '../../core/use-cases/find-all-availabel-by-lab-id/find-by-lab-id.service';
import { FindAllReservationsByUserAndLabService } from '../../core/use-cases/find-all-by-user-and-lab/find-all.service';
import { FindAllReservationsAside } from '../../core/use-cases/find-all-reservations-aside/find-all-reservations-aside.service';

@Controller('reservation')
export class ReservationController {
  constructor(
    private createReservationService: CreateReservationService,
    private findAvailableReservationsService: FindAvailableReservationsService,
    private deleteReservationService: DeleteReservationService,
    private findAllReservationsByUserService: FindAllReservationsByUserAndLabService,
    private readonly findAllReservationsAside: FindAllReservationsAside,
  ) {}

  @Post('create')
  public async create(@Body() data) {
    return await this.createReservationService.execute(data);
  }

  @Get('find/:laboratoryId')
  public async findAvailable(@Param('laboratoryId') laboratoryId: string, @Query('day') day: string) {
    return await this.findAvailableReservationsService.execute(laboratoryId, day);
  }

  @Delete('delete/:reservationId')
  public async delete(@Param('reservationId') reservationId: string) {
    return this.deleteReservationService.execute(reservationId);
  }

  @Get('find-by-range/:userId')
  public async findAllByDateRange(@Param('userId') userId: string, @Query('laboratoryId') laboratoryId: string) {
    return await this.findAllReservationsByUserService.execute(userId, laboratoryId);
  }

  @Get('find-all-aside/:userId')
  public async findAllAsideByDateRange(@Param('userId') userId: string, @Query('laboratoryId') laboratoryId: string) {
    return await this.findAllReservationsAside.execute(userId, laboratoryId);
  }
}
