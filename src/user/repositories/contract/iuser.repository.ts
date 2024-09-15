import { ICreateUserPayload } from '../../shared/icreate-user-payload';
import { UserEntity } from '../../entities/user.entity';

export abstract class IUserRepository {
  abstract create(dto: ICreateUserPayload): Promise<UserEntity>;
}