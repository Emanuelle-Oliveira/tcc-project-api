export class ProjectEntity {
  id: number;
  name: string;
  userId: number;

  constructor(payload: {
    id: number;
    name: string;
    userId: number;
  }) {
    this.id = payload.id;
    this.name = payload.name;
    this.userId = payload.userId;
  }
}


