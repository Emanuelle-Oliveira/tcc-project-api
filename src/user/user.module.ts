import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepositoryProvider } from './repositories/user.repository';
import { CreateUserUseCaseProvider } from './use-cases/create-user.use-case';
import { UpdateUserUseCaseProvider } from './use-cases/update-user.use-case';
import { GetAllUserUseCaseProvider } from './use-cases/get-all-user.use-case';
import { GetOneUserUseCaseProvider } from './use-cases/get-one-user.use-case';
import { DeleteUserUseCaseProvider } from './use-cases/delete-user.use-case';

@Module({
  controllers: [UserController],
  providers: [
    UserRepositoryProvider,
    CreateUserUseCaseProvider,
    UpdateUserUseCaseProvider,
    GetAllUserUseCaseProvider,
    GetOneUserUseCaseProvider,
    DeleteUserUseCaseProvider
  ],
  exports: [
    UserRepositoryProvider,
    CreateUserUseCaseProvider,
    UpdateUserUseCaseProvider,
    GetAllUserUseCaseProvider,
    GetOneUserUseCaseProvider,
    DeleteUserUseCaseProvider
  ]
})

export class UserModule {}
