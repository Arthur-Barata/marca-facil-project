import { RoleEnum } from '../../../enum/user-role.enum';

export class CreateUserRequestDto {
  enrollment: string;
  role?: RoleEnum;
  password?: string;
  name: string;
}
