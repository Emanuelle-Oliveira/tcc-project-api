import { Module } from '@nestjs/common';
import { XcolumnController } from './controllers/xcolumn.controller';
import { XcolumnRepositoryProvider } from './repositories/xcolumn.repository';
import { CreateXcolumnUseCaseProvider } from './use-cases/create-xcolumn.use-case';
import { UpdateXcolumnUseCaseProvider } from './use-cases/update-xcolumn.use-case';
import { GetAllXcolumnUseCaseProvider } from './use-cases/get-all-xcolumn.use-case';
import { GetOneXcolumnUseCaseProvider } from './use-cases/get-one-xcolumn.use-case';
import { GetByTableXcolumnUseCaseProvider } from './use-cases/get-by-table-xcolumn.use-case';
import { DeleteXcolumnUseCaseProvider } from './use-cases/delete-xcolumn.use-case';

@Module({
  controllers: [XcolumnController],
  providers: [
    XcolumnRepositoryProvider,
    CreateXcolumnUseCaseProvider,
    UpdateXcolumnUseCaseProvider,
    GetAllXcolumnUseCaseProvider,
    GetOneXcolumnUseCaseProvider,
    GetByTableXcolumnUseCaseProvider,
    DeleteXcolumnUseCaseProvider,
  ],
  exports: [
    XcolumnRepositoryProvider,
    CreateXcolumnUseCaseProvider,
    UpdateXcolumnUseCaseProvider,
    GetAllXcolumnUseCaseProvider,
    GetOneXcolumnUseCaseProvider,
    GetByTableXcolumnUseCaseProvider,
    DeleteXcolumnUseCaseProvider,
  ],
})
export class XcolumnModule {}
