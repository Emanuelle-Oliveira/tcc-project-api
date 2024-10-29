import { IUpdateRelationshipPayload } from '../shared/iupdate-relationship-payload';
import { Cardinality } from '../type/cardinality/cardinality.type';
import { RelatedKeysEntity } from '../../related-keys/entities/related-keys.entity';

export class UpdateRelationshipDto implements IUpdateRelationshipPayload {
  firstTableId: number;
  secondTableId: number;
  firstTableCardinality: Cardinality;
  secondTableCardinality: Cardinality;
  relatedKeys: RelatedKeysEntity[];
}
