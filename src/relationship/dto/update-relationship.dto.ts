import { IUpdateRelationshipPayload } from '../shared/iupdate-relationship-payload';
import { Cardinality } from '../type/cardinality/cardinality.type';

export class UpdateRelationshipDto implements IUpdateRelationshipPayload {
  firstTableId: number;
  secondTableId: number;
  firstTableCardinality: Cardinality;
  secondTableCardinality: Cardinality;
}
