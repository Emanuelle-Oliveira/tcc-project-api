import { Cardinality } from '../type/cardinality/cardinality.type';

export interface IUpdateRelationshipPayload {
  firstTableId: number;
  secondTableId: number;
  firstTableCardinality: Cardinality;
  secondTableCardinality: Cardinality;
}
