import { Injectable, Provider } from '@nestjs/common';
import { ICreateUserPayload } from '../shared/icreate-user-payload';
import { UserEntity } from '../entities/user.entity';
import { ICreateUserUseCase } from './contract/icreate-item.use-case';
import { IUserRepository } from '../repositories/contract/iuser.repository';
import { IUpdateUserUseCase } from './contract/iupdate-item.use-case';
import { IUpdateUserPayload } from '../shared/iupdate-user-payload';

@Injectable()
export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: number, dto: IUpdateUserPayload): Promise<UserEntity> {
    return this.userRepository.update(id, dto);
  }
}

export const UpdateUserUseCaseProvider: Provider<IUpdateUserUseCase> = {
  provide: IUpdateUserUseCase,
  useClass: UpdateUserUseCase,
};