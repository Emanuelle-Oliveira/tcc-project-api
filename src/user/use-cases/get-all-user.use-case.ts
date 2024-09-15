import { Injectable, Provider } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { IUserRepository } from '../repositories/contract/iuser.repository';
import { IGetAllUserUseCase } from './contract/iget-all-user.use-case';

@Injectable()
export class GetAllUserUseCase implements IGetAllUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<UserEntity[]> {
    return this.userRepository.getAll();
  }
}

export const GetAllUserUseCaseProvider: Provider<IGetAllUserUseCase> = {
  provide: IGetAllUserUseCase,
  useClass: GetAllUserUseCase,
};