import { Cardinality } from '../type/cardinality/cardinality.type';

export class RelationshipEntity {
  id: number;
  firstTableId: number;
  secondTableId: number;
  firstTableCardinality: Cardinality;
  secondTableCardinality: Cardinality;

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
}
