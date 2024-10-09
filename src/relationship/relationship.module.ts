import { Module } from '@nestjs/common';
import { RelationshipController } from './controllers/relationship.controller';
import { RelationshipRepositoryProvider } from './repositories/relationship.repository';
import { CreateRelationshipUseCaseProvider } from './use-cases/create-relationship.use-case';
import { UpdateRelationshipUseCaseProvider } from './use-cases/update-relationship.use-case';
import { GetAllRelationshipUseCaseProvider } from './use-cases/get-all-relationship.use-case';
import { GetOneRelationshipUseCaseProvider } from './use-cases/get-one-relationship.use-case';

import { DeleteRelationshipUseCaseProvider } from './use-cases/delete-relationship.use-case';
import { GetByTablesRelationshipUseCaseProvider } from './use-cases/get-by-tables-relationship.use-case';
import { RelatedKeysRepositoryProvider } from '../related-keys/repositories/related-key.repository';

@Module({
  controllers: [RelationshipController],
  providers: [
    RelationshipRepositoryProvider,
    RelatedKeysRepositoryProvider,
    CreateRelationshipUseCaseProvider,
    UpdateRelationshipUseCaseProvider,
    GetAllRelationshipUseCaseProvider,
    GetOneRelationshipUseCaseProvider,
    GetByTablesRelationshipUseCaseProvider,
    DeleteRelationshipUseCaseProvider,
  ],
  exports: [
    RelationshipRepositoryProvider,
    RelatedKeysRepositoryProvider,
    CreateRelationshipUseCaseProvider,
    UpdateRelationshipUseCaseProvider,
    GetAllRelationshipUseCaseProvider,
    GetOneRelationshipUseCaseProvider,
    GetByTablesRelationshipUseCaseProvider,
    DeleteRelationshipUseCaseProvider,
  ],
})
export class RelationshipModule {}
