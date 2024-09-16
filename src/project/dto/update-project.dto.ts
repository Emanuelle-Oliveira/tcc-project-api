import { IUpdateProjectPayload } from '../shared/iupdate-project-payload';

export class UpdateProjectDto implements IUpdateProjectPayload {
  name: string;
  userId: number;
}
