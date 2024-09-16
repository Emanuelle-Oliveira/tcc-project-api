import { ProjectEntity } from '../../entities/project.entity';
import { IUpdateProjectPayload } from '../../shared/iupdate-project-payload';

export abstract class IUpdateProjectUseCase {
  abstract execute(id: number, dto: IUpdateProjectPayload): Promise<ProjectEntity>;
}