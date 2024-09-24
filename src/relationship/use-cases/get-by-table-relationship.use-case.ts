import { Injectable, Provider } from '@nestjs/common';
import { RelationshipEntity } from '../entities/relationship.entity';
import { IRelationshipRepository } from '../repositories/contract/irelationship.repository';
import { IGetByFirstTableRelationshipUseCase } from './contract/iget-by-first-table-relationship.use-case';

@Injectable()
export class GetByFirstTableRelationshipUseCase
  implements IGetByFirstTableRelationshipUseCase
{
  constructor(
    private readonly relationshipRepository: IRelationshipRepository,
  ) {}

  async execute(firstTableId: number): Promise<RelationshipEntity[]> {
    return this.relationshipRepository.getByFirstTable(firstTableId);
  }
}

export const GetByFirstTableRelationshipUseCaseProvider: Provider<IGetByFirstTableRelationshipUseCase> =
  {
    provide: IGetByFirstTableRelationshipUseCase,
    useClass: GetByFirstTableRelationshipUseCase,
  };
