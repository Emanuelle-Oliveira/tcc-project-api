import { ICreateUserPayload } from '../../shared/icreate-user-payload';
import { UserEntity } from '../../entities/user.entity';
import { IUpdateUserPayload } from '../../shared/iupdate-user-payload';

export abstract class IUserRepository {
  abstract create(dto: ICreateUserPayload): Promise<UserEntity>;
  abstract update(id: number, dto: IUpdateUserPayload): Promise<UserEntity>;
  abstract getAll(): Promise<UserEntity[]>;
  abstract getOne(id: number): Promise<UserEntity>;
}