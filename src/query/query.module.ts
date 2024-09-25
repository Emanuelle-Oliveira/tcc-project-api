import { Module } from '@nestjs/common';
import { QueryController } from './controllers/query.controller';
import { QueryRepositoryProvider } from './repositories/query.repository';
import { CreateQueryUseCaseProvider } from './use-cases/create-query.use-case';
import { GetAllQueryUseCaseProvider } from './use-cases/get-all-query.use-case';
import { GetOneQueryUseCaseProvider } from './use-cases/get-one-query.use-case';
import { DeleteQueryUseCaseProvider } from './use-cases/delete-query.use-case';

@Module({
  controllers: [QueryController],
  providers: [
    QueryRepositoryProvider,
    CreateQueryUseCaseProvider,
    GetAllQueryUseCaseProvider,
    GetOneQueryUseCaseProvider,
    DeleteQueryUseCaseProvider,
  ],
  exports: [
    QueryRepositoryProvider,
    CreateQueryUseCaseProvider,
    GetAllQueryUseCaseProvider,
    GetOneQueryUseCaseProvider,
    DeleteQueryUseCaseProvider,
  ],
})
export class QueryModule {}
