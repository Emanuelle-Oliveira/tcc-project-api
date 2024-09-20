export class XtableEntity {
  id: number;
  name: string;
  alias: string;
  projectId: number;

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
}
