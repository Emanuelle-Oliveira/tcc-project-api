import { Injectable, Provider } from '@nestjs/common';
import { RelationshipEntity } from '../entities/relationship.entity';
import { IRelationshipRepository } from '../repositories/contract/irelationship.repository';
import { IDeleteRelationshipUseCase } from './contract/idelete-relationship.use-case';

@Injectable()
export class DeleteRelationshipUseCase implements IDeleteRelationshipUseCase {
  constructor(
    private readonly relationshipRepository: IRelationshipRepository,
  ) {}

  async execute(id: number): Promise<RelationshipEntity> {
    return this.relationshipRepository.delete(id);
  }
}

export const DeleteRelationshipUseCaseProvider: Provider<IDeleteRelationshipUseCase> =
  {
    provide: IDeleteRelationshipUseCase,
    useClass: DeleteRelationshipUseCase,
  };
