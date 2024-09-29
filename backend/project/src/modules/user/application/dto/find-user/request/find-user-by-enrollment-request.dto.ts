import { IsNotEmpty, IsString } from 'class-validator';

export class FindUserRequestDto {
  @IsNotEmpty()
  @IsString()
  enrollment: string;
}
