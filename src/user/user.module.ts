import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepositoryProvider } from './repositories/user.repository';
import { CreateUserUseCaseProvider } from './use-cases/create-user.use-case';

@Module({
  controllers: [UserController],
  providers: [
    UserRepositoryProvider,
    CreateUserUseCaseProvider
  ],
  exports: [
    UserRepositoryProvider,
    CreateUserUseCaseProvider
  ]
})

export class UserModule {}
