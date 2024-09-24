import { Injectable, Provider } from '@nestjs/common';
import { RelationshipEntity } from '../entities/relationship.entity';
import { IRelationshipRepository } from '../repositories/contract/irelationship.repository';
import { IUpdateRelationshipUseCase } from './contract/iupdate-relationship.use-case';
import { IUpdateRelationshipPayload } from '../shared/iupdate-relationship-payload';

@Injectable()
export class UpdateRelationshipUseCase implements IUpdateRelationshipUseCase {
  constructor(
    private readonly relationshipRepository: IRelationshipRepository,
  ) {}

  async execute(
    id: number,
    dto: IUpdateRelationshipPayload,
  ): Promise<RelationshipEntity> {
    return this.relationshipRepository.update(id, dto);
  }
}

export const UpdateRelationshipUseCaseProvider: Provider<IUpdateRelationshipUseCase> =
  {
    provide: IUpdateRelationshipUseCase,
    useClass: UpdateRelationshipUseCase,
  };
