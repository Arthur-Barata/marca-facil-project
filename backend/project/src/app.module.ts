import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/core/guard/auth.guard';
import { LaboratoryModule } from './modules/laboratory/laboratory.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    LaboratoryModule,
    AuthModule,
    ReservationModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
