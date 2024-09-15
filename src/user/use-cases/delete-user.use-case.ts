import { Injectable, Provider } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { IUserRepository } from '../repositories/contract/iuser.repository';
import { IDeleteUserUseCase } from './contract/idelete-user.use-case';

@Injectable()
export class DeleteUserUseCase implements IDeleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: number): Promise<UserEntity> {
    return this.userRepository.delete(id);
  }
}

export const DeleteUserUseCaseProvider: Provider<IDeleteUserUseCase> = {
  provide: IDeleteUserUseCase,
  useClass: DeleteUserUseCase,
};