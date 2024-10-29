import { Cardinality } from '../type/cardinality/cardinality.type';
import { RelatedKeysEntity } from '../../related-keys/entities/related-keys.entity';

export interface IUpdateRelationshipPayload {
  firstTableId: number;
  secondTableId: number;
  firstTableCardinality: Cardinality;
  secondTableCardinality: Cardinality;
  relatedKeys: RelatedKeysEntity[];
}
