import { ICreateUserPayload } from '../shared/icreate-user-payload';

export class CreateUserDto implements ICreateUserPayload {
  email: string;
  name: string;
}
