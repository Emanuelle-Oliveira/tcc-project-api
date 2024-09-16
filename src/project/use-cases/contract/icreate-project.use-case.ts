import { ProjectEntity } from '../../entities/project.entity';
import { ICreateProjectPayload } from '../../shared/icreate-project-payload';

export abstract class ICreateProjectUseCase {
  abstract execute(dto: ICreateProjectPayload): Promise<ProjectEntity>;
}