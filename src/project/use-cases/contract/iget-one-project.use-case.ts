import { ProjectEntity } from '../../entities/project.entity';

export abstract class IGetOneProjectUseCase {
  abstract execute(id: number): Promise<ProjectEntity>;
}