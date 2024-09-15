import { Injectable, Provider } from '@nestjs/common';
import { ICreateUserPayload } from '../shared/icreate-user-payload';
import { UserEntity } from '../entities/user.entity';
import { ICreateUserUseCase } from './contract/icreate-user.use-case';
import { IUserRepository } from '../repositories/contract/iuser.repository';

@Injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(dto: ICreateUserPayload): Promise<UserEntity> {
    return this.userRepository.create(dto);
  }
}

export const CreateUserUseCaseProvider: Provider<ICreateUserUseCase> = {
  provide: ICreateUserUseCase,
  useClass: CreateUserUseCase,
};