import { XcolumnEntity } from '../../xcolumn/entities/xcolumn.entity';
import { RelationshipEntity } from '../../relationship/entities/relationship.entity';

export class XtableEntity {
  id: number;
  name: string;
  alias: string;
  projectId: number;
  xcolumns?: XcolumnEntity[] | null;
  firstRelationships?: RelationshipEntity[] | null;
  secondRelationships?: RelationshipEntity[] | null;

  constructor(payload: {
    id: number;
    name: string;
    alias: string;
    projectId: number;
  }) {
    this.id = payload.id;
    this.name = payload.name;
    this.alias = payload.alias;
    this.projectId = payload.projectId;
  }

  setXcolumns(xcolumns: XcolumnEntity[]) {
    this.xcolumns = xcolumns;
    return this;
  }

  setFirstRelationships(firstRelationships: RelationshipEntity[]) {
    this.firstRelationships = firstRelationships;
    return this;
  }

  setSecondRelationships(secondRelationships: RelationshipEntity[]) {
    this.secondRelationships = secondRelationships;
    return this;
  }
}
