import { UserEntity } from '../../entities/user.entity';
import { ICreateUserPayload } from '../../shared/icreate-user-payload';

export abstract class ICreateUserUseCase {
  abstract execute(dto: ICreateUserPayload): Promise<UserEntity>;
}