import { ICreateProjectPayload } from '../shared/icreate-project-payload';

export class CreateProjectDto implements ICreateProjectPayload {
  name: string;
  userId: number;
}
