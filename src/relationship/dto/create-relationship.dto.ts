import { ICreateRelationshipPayload } from '../shared/icreate-relationship-payload';
import { Cardinality } from '../type/cardinality/cardinality.type';
import { RelatedKeysEntity } from '../../related-keys/entities/related-keys.entity';

export class CreateRelationshipDto implements ICreateRelationshipPayload {
  firstTableId: number;
  secondTableId: number;
  secondTableCardinality: Cardinality;
  firstTableCardinality: Cardinality;
  relatedKeys: RelatedKeysEntity[];
}
