import { ProjectEntity } from '../../entities/project.entity';

export abstract class IGetByUserProjectUseCase {
  abstract execute(userId: number): Promise<ProjectEntity[]>;
}