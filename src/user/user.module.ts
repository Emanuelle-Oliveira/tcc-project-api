import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepositoryProvider } from './repositories/user.repository';
import { CreateUserUseCaseProvider } from './use-cases/create-user.use-case';
import { UpdateUserUseCaseProvider } from './use-cases/update-user.use-case';

@Module({
  controllers: [UserController],
  providers: [
    UserRepositoryProvider,
    CreateUserUseCaseProvider,
    UpdateUserUseCaseProvider
  ],
  exports: [
    UserRepositoryProvider,
    CreateUserUseCaseProvider,
    UpdateUserUseCaseProvider
  ]
})

export class UserModule {}
