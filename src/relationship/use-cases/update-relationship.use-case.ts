import { Injectable, Provider } from '@nestjs/common';
import { RelationshipEntity } from '../entities/relationship.entity';
import { IRelationshipRepository } from '../repositories/contract/irelationship.repository';
import { IUpdateRelationshipUseCase } from './contract/iupdate-relationship.use-case';
import { IUpdateRelationshipPayload } from '../shared/iupdate-relationship-payload';
import { IRelatedKeysRepository } from '../../related-keys/repositories/contract/irelated-keys.repository';

@Injectable()
export class UpdateRelationshipUseCase implements IUpdateRelationshipUseCase {
  constructor(
    private readonly relationshipRepository: IRelationshipRepository,
    private readonly relatedKeysRepository: IRelatedKeysRepository,
  ) {}

  async execute(
    id: number,
    dto: IUpdateRelationshipPayload,
  ): Promise<RelationshipEntity> {
    const updatedRelationship = await this.relationshipRepository.update(
      id,
      dto,
    );

    const relatedKeys = dto.relatedKeys;

    const relatedKeysList = [];

    await this.relatedKeysRepository.deleteByRelationship(id);

    updatedRelationship.relatedKeys = [];
    
    for (const relatedKey of relatedKeys) {
      const relatedKeysEntity = await this.relatedKeysRepository.create({
        relationshipId: updatedRelationship.id,
        firstColumnId: relatedKey.firstColumnId,
        secondColumnId: relatedKey.secondColumnId,
      });
      relatedKeysList.push(relatedKeysEntity);
    }

    updatedRelationship.setRelatedKeys(relatedKeysList);

    return updatedRelationship;
  }
}

export const UpdateRelationshipUseCaseProvider: Provider<IUpdateRelationshipUseCase> =
  {
    provide: IUpdateRelationshipUseCase,
    useClass: UpdateRelationshipUseCase,
  };
