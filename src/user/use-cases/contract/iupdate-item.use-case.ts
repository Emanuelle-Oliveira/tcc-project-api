import { UserEntity } from '../../entities/user.entity';
import { ICreateUserPayload } from '../../shared/icreate-user-payload';
import { IUpdateUserPayload } from '../../shared/iupdate-user-payload';

export abstract class IUpdateUserUseCase {
  abstract execute(id: number, dto: IUpdateUserPayload): Promise<UserEntity>;
}