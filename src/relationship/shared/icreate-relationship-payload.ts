import { Cardinality } from '../type/cardinality/cardinality.type';
import { RelatedKeysEntity } from '../../related-keys/entities/related-keys.entity';
import { ICreateRelatedKeysPayload } from '../../related-keys/shared/icreate-related-keys.payload';

export interface ICreateRelationshipPayload {
  firstTableId: number;
  secondTableId: number;
  firstTableCardinality: Cardinality;
  secondTableCardinality: Cardinality;
  relatedKeys: ICreateRelatedKeysPayload[];
}
