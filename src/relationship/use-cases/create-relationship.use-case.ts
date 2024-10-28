import { ICreateRelationshipPayload } from '../shared/icreate-relationship-payload';
import { RelationshipEntity } from '../entities/relationship.entity';
import { ICreateRelationshipUseCase } from './contract/icreate-relationship.use-case';
import { IRelationshipRepository } from '../repositories/contract/irelationship.repository';
import { Injectable, Provider } from '@nestjs/common';
import { IRelatedKeysRepository } from '../../related-keys/repositories/contract/irelated-keys.repository';

@Injectable()
export class CreateRelationshipUseCase implements ICreateRelationshipUseCase {
  constructor(
    private readonly relationshipRepository: IRelationshipRepository,
    private readonly relatedkeysRepository: IRelatedKeysRepository,
  ) {}

  async execute(dto: ICreateRelationshipPayload): Promise<RelationshipEntity> {
    const relationship = await this.relationshipRepository.create(dto);

    const relatedKeys = dto.relatedKeys;

    const relatedKeysList = [];

    for (const relatedKey of relatedKeys) {
      const relatedKeysEntity = await this.relatedkeysRepository.create({
        relationshipId: relationship.id,
        firstColumnId: relatedKey.firstColumnId,
        secondColumnId: relatedKey.secondColumnId,
      });
      relatedKeysList.push(relatedKeysEntity);
    }

    relationship.setRelatedKeys(relatedKeysList);

    return relationship;
  }
}

export const CreateRelationshipUseCaseProvider: Provider<ICreateRelationshipUseCase> =
  {
    provide: ICreateRelationshipUseCase,
    useClass: CreateRelationshipUseCase,
  };
