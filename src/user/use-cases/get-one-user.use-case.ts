import { Injectable, Provider } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { IUserRepository } from '../repositories/contract/iuser.repository';
import { IGetOneUserUseCase } from './contract/iget-one-user.use-case';

@Injectable()
export class GetOneUserUseCase implements IGetOneUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: number): Promise<UserEntity> {
    return this.userRepository.getOne(id);
  }
}

export const GetOneUserUseCaseProvider: Provider<IGetOneUserUseCase> = {
  provide: IGetOneUserUseCase,
  useClass: GetOneUserUseCase,
};