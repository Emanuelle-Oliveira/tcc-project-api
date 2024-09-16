import { ProjectEntity } from '../../entities/project.entity';

export abstract class IGetAllProjectUseCase {
  abstract execute(): Promise<ProjectEntity[]>;
}