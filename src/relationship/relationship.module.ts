import { Module } from '@nestjs/common';
import { RelationshipController } from './controllers/relationship.controller';
import { RelationshipRepositoryProvider } from './repositories/relationship.repository';
import { CreateRelationshipUseCaseProvider } from './use-cases/create-relationship.use-case';
import { UpdateRelationshipUseCaseProvider } from './use-cases/update-relationship.use-case';
import { GetAllRelationshipUseCaseProvider } from './use-cases/get-all-relationship.use-case';
import { GetOneRelationshipUseCaseProvider } from './use-cases/get-one-relationship.use-case';
import { GetByFirstTableRelationshipUseCaseProvider } from './use-cases/get-by-table-relationship.use-case';
import { DeleteRelationshipUseCaseProvider } from './use-cases/delete-relationship.use-case';

@Module({
  controllers: [RelationshipController],
  providers: [
    RelationshipRepositoryProvider,
    CreateRelationshipUseCaseProvider,
    UpdateRelationshipUseCaseProvider,
    GetAllRelationshipUseCaseProvider,
    GetOneRelationshipUseCaseProvider,
    GetByFirstTableRelationshipUseCaseProvider,
    DeleteRelationshipUseCaseProvider,
  ],
  exports: [
    RelationshipRepositoryProvider,
    CreateRelationshipUseCaseProvider,
    UpdateRelationshipUseCaseProvider,
    GetAllRelationshipUseCaseProvider,
    GetOneRelationshipUseCaseProvider,
    GetByFirstTableRelationshipUseCaseProvider,
    DeleteRelationshipUseCaseProvider,
  ],
})
export class RelationshipModule {}
