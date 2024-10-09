import { ICreateRelatedKeysPayload } from '../../shared/icreate-related-keys.payload';
import { RelatedKeysEntity } from '../../entities/related-keys.entity';

export abstract class IRelatedKeysRepository {
  abstract create(dto: ICreateRelatedKeysPayload): Promise<RelatedKeysEntity>;

  abstract getByRelationship(
    relationshipId: number,
  ): Promise<RelatedKeysEntity[]>;

  abstract delete(id: number): Promise<RelatedKeysEntity>;
}
