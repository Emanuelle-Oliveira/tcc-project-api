import { ICreateRelatedKeysPayload } from '../../shared/icreate-related-keys.payload';
import { RelatedKeysEntity } from '../../entities/related-keys.entity';
import { IUpdateRelatedKeysPayload } from '../../shared/iupdate-related-keys.payload';

export abstract class IRelatedKeysRepository {
  abstract create(dto: ICreateRelatedKeysPayload): Promise<RelatedKeysEntity>;

  abstract update(
    id: number,
    dto: IUpdateRelatedKeysPayload,
  ): Promise<RelatedKeysEntity>;

  abstract getByRelationship(
    relationshipId: number,
  ): Promise<RelatedKeysEntity[]>;

  abstract deleteByRelationship(
    relationshipId: number,
  ): Promise<RelatedKeysEntity[]>;
}
