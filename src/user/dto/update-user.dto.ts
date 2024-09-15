import { IUpdateUserPayload } from '../shared/iupdate-user-payload';

export class UpdateUserDto implements IUpdateUserPayload {
  email: string;
  name: string;
}
