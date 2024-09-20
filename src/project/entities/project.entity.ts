import { XtableEntity } from '../../xtable/entities/xtable.entity';

export class ProjectEntity {
  id: number;
  name: string;
  userId: number;
  xtables?: XtableEntity[] | null;

  constructor(payload: {
    id: number;
    name: string;
    userId: number;
  }) {
    this.id = payload.id;
    this.name = payload.name;
    this.userId = payload.userId;
  }

  setXtables(xtables: XtableEntity[]) {
    this.xtables = xtables;
    return this;
  }
}


