import { IUpdateXtablePayload } from '../shared/iupdate-xtable-payload';

export class UpdateXtableDto implements IUpdateXtablePayload {
  name: string;
  alias: string;
  projectId: number;
}
