import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FindUserService } from '../../../user/core/use-cases/find/find-user.service';
import { signInRequestDto } from '../../application/dto/sign-in-request.dto';
import { IJwtPayload } from '../../application/interface/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly findUserService: FindUserService,
    private jwtService: JwtService,
  ) {}

  public async signIn(data: signInRequestDto) {
    const { enrollment, password } = data;

    try {
      const user = await this.findUserService.execute({ enrollment });

      if (user?.password != password) {
        throw new UnauthorizedException();
      }
      const payload = {
        sub: user.enrollment,
        name: user.name,
        role: user.role,
      };

      const accessToken = await this.generateAccessToken(payload);

      return { accessToken, name: user.name, role: user.role, enrollment: user.enrollment };
    } catch {
      throw new UnauthorizedException();
    }
  }

  private async generateAccessToken(payload: IJwtPayload): Promise<string> {
    try {
      return await this.jwtService.signAsync(payload);
    } catch (error) {
      throw new HttpException(`message:${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
