import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { IsPublic } from 'src/shared/decorators/allow-unauth-request/is-public.decorator';
import { AuthService } from '../../core/authentication/auth.service';
import { signInRequestDto } from '../dto/sign-in-request.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('/user-signIn')
  @HttpCode(HttpStatus.OK)
  public async signIn(@Body() data: signInRequestDto) {
    return await this.authService.signIn(data);
  }
}
