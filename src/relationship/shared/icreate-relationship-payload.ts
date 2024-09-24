import { Cardinality } from '../type/cardinality/cardinality.type';

export interface ICreateRelationshipPayload {
  firstTableId: number;
  secondTableId: number;
  firstTableCardinality: Cardinality;
  secondTableCardinality: Cardinality;
}
