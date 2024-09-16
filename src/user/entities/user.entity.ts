import { ProjectEntity } from '../../project/entities/project.entity';

export class UserEntity {
  id: number;
  email: string;
  name: string;
  projects?: ProjectEntity[] | null;

  constructor(payload: {
    id: number;
    email: string;
    name: string;
  }) {
    this.id = payload.id;
    this.email = payload.email;
    this.name = payload.name;
  }

  setProjects(projects: ProjectEntity[]) {
    this.projects = projects;
    return this;
  }
}
