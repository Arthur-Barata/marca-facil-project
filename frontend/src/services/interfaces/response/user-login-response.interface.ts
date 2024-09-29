import { UserRoleEnum } from "shared/enums/user-role.enum";

export interface IUserLoginResponse {
  accessToken: string;
  name: string;
  enrollment: string;
  role: UserRoleEnum;
}
