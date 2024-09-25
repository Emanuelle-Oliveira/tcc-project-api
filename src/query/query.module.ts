import { Module } from '@nestjs/common';
import { QueryController } from './controllers/query.controller';
import { QueryRepositoryProvider } from './repositories/query.repository';
import { CreateQueryUseCaseProvider } from './use-cases/create-query.use-case';
import { GetAllQueryUseCaseProvider } from './use-cases/get-all-query.use-case';
import { GetOneQueryUseCaseProvider } from './use-cases/get-one-query.use-case';
import { DeleteQueryUseCaseProvider } from './use-cases/delete-query.use-case';
import { XtableRepositoryProvider } from '../xtable/repositories/xtable.repository';
import { XcolumnRepositoryProvider } from '../xcolumn/repositories/xcolumn.repository';

@Module({
  controllers: [QueryController],
  providers: [
    QueryRepositoryProvider,
    XtableRepositoryProvider,
    XcolumnRepositoryProvider,
    CreateQueryUseCaseProvider,
    GetAllQueryUseCaseProvider,
    GetOneQueryUseCaseProvider,
    DeleteQueryUseCaseProvider,
  ],
  exports: [
    QueryRepositoryProvider,
    XtableRepositoryProvider,
    XcolumnRepositoryProvider,
    CreateQueryUseCaseProvider,
    GetAllQueryUseCaseProvider,
    GetOneQueryUseCaseProvider,
    DeleteQueryUseCaseProvider,
  ],
})
export class QueryModule {}
