import { Injectable, Provider } from '@nestjs/common';
import { RelationshipEntity } from '../entities/relationship.entity';
import { IRelationshipRepository } from '../repositories/contract/irelationship.repository';
import { IGetAllRelationshipUseCase } from './contract/iget-all-relationship.use-case';

@Injectable()
export class GetAllRelationshipUseCase implements IGetAllRelationshipUseCase {
  constructor(
    private readonly relationshipRepository: IRelationshipRepository,
  ) {}

  async execute(): Promise<RelationshipEntity[]> {
    return this.relationshipRepository.getAll();
  }
}

export const GetAllRelationshipUseCaseProvider: Provider<IGetAllRelationshipUseCase> =
  {
    provide: IGetAllRelationshipUseCase,
    useClass: GetAllRelationshipUseCase,
  };
