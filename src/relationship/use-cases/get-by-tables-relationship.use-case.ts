import { Injectable, Provider } from '@nestjs/common';
import { RelationshipEntity } from '../entities/relationship.entity';
import { IRelationshipRepository } from '../repositories/contract/irelationship.repository';
import { IGetByTablesRelationshipUseCase } from './contract/iget-by-tables-relationship.use-case';

@Injectable()
export class GetByTablesRelationshipUseCase
  implements IGetByTablesRelationshipUseCase
{
  constructor(
    private readonly relationshipRepository: IRelationshipRepository,
  ) {}

  async execute(
    firstTableId: number,
    secondTableId: number,
  ): Promise<RelationshipEntity[]> {
    return this.relationshipRepository.getByTables(firstTableId, secondTableId);
  }
}

export const GetByTablesRelationshipUseCaseProvider: Provider<IGetByTablesRelationshipUseCase> =
  {
    provide: IGetByTablesRelationshipUseCase,
    useClass: GetByTablesRelationshipUseCase,
  };
