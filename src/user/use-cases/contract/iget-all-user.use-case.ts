import { UserEntity } from '../../entities/user.entity';

export abstract class IGetAllUserUseCase {
  abstract execute(): Promise<UserEntity[]>;
}