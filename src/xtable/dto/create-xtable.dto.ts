import { ICreateXtablePayload } from '../shared/icreate-xtable-payload';

export class CreateXtableDto implements ICreateXtablePayload {
  name: string;
  alias: string;
  projectId: number;
}
