import { ICreateRelationshipPayload } from '../shared/icreate-relationship-payload';
import { Cardinality } from '../type/cardinality/cardinality.type';

export class CreateRelationshipDto implements ICreateRelationshipPayload {
  firstTableId: number;
  secondTableId: number;
  secondTableCardinality: Cardinality;
  firstTableCardinality: Cardinality;
}
