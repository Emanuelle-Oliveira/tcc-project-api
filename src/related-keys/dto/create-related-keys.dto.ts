import { ICreateRelatedKeysPayload } from '../shared/icreate-related-keys.payload';

export class CreateRelatedKeysDto implements ICreateRelatedKeysPayload {
  firstColumnId: number;
  secondColumnId: number;
  relationshipId: number;
}
