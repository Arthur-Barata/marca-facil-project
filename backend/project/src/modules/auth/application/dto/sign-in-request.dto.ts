import { IsNotEmpty, IsString } from 'class-validator';

export class signInRequestDto {
  @IsString()
  @IsNotEmpty()
  enrollment: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
