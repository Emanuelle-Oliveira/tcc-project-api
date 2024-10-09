import { Cardinality } from '../type/cardinality/cardinality.type';
import { RelatedKeysEntity } from '../../related-keys/entities/related-keys.entity';
import { XcolumnEntity } from '../../xcolumn/entities/xcolumn.entity';

export class RelationshipEntity {
  id: number;
  firstTableId: number;
  secondTableId: number;
  firstTableCardinality: Cardinality;
  secondTableCardinality: Cardinality;
  relatedKeys?: RelatedKeysEntity[] | null;

  constructor(payload: {
    id: number;
    firstTableId: number;
    secondTableId: number;
    firstTableCardinality: Cardinality;
    secondTableCardinality: Cardinality;
  }) {
    this.id = payload.id;
    this.firstTableId = payload.firstTableId;
    this.secondTableId = payload.secondTableId;
    this.firstTableCardinality = payload.firstTableCardinality;
    this.secondTableCardinality = payload.secondTableCardinality;
  }

  setRelatedKeys(relatedKeys: RelatedKeysEntity[]) {
    this.relatedKeys = relatedKeys;
    return this;
  }
}
