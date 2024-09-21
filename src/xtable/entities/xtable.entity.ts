import { XcolumnEntity } from '../../xcolumn/entities/xcolumn.entity';

export class XtableEntity {
  id: number;
  name: string;
  alias: string;
  projectId: number;
  xcolumns?: XcolumnEntity[] | null;

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
}
