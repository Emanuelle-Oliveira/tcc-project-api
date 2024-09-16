import { ProjectEntity } from '../../entities/project.entity';

export abstract class IDeleteProjectUseCase {
  abstract execute(id: number): Promise<ProjectEntity>;
}