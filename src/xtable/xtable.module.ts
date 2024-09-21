import { Module } from '@nestjs/common';
import { XtableController } from './controllers/xtable.controller';
import { XtableRepositoryProvider } from './repositories/xtable.repository';
import { CreateXtableUseCaseProvider } from './use-cases/create-xtable.use-case';
import { UpdateXtableUseCaseProvider } from './use-cases/update-xtable.use-case';
import { GetAllXtableUseCaseProvider } from './use-cases/get-all-xtable.use-case';
import { GetOneXtableUseCaseProvider } from './use-cases/get-one-xtable.use-case';
import { GetByProjectXtableUseCaseProvider } from './use-cases/get-by-project-xtable.use-case';
import { DeleteXtableUseCaseProvider } from './use-cases/delete-xtable.use-case';

@Module({
  controllers: [XtableController],
  providers: [
    XtableRepositoryProvider,
    CreateXtableUseCaseProvider,
    UpdateXtableUseCaseProvider,
    GetAllXtableUseCaseProvider,
    GetOneXtableUseCaseProvider,
    GetByProjectXtableUseCaseProvider,
    DeleteXtableUseCaseProvider,
  ],
  exports: [
    XtableRepositoryProvider,
    CreateXtableUseCaseProvider,
    UpdateXtableUseCaseProvider,
    GetAllXtableUseCaseProvider,
    GetOneXtableUseCaseProvider,
    GetByProjectXtableUseCaseProvider,
    DeleteXtableUseCaseProvider,
  ],
})
export class XtableModule {}
