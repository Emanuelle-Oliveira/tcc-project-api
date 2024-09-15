import { UserEntity } from '../../entities/user.entity';

export abstract class IDeleteUserUseCase {
  abstract execute(id: number): Promise<UserEntity>;
}