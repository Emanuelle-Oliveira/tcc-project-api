export class RelatedKeysEntity {
  id: number;
  firstColumnId: number;
  secondColumnId: number;
  relationshipId: number;

  constructor(payload: {
    id: number;
    firstColumnId: number;
    secondColumnId: number;
    relationshipId: number;
  }) {
    this.id = payload.id;
    this.firstColumnId = payload.firstColumnId;
    this.secondColumnId = payload.secondColumnId;
    this.relationshipId = payload.relationshipId;
  }
}
