import { Injectable, Provider } from '@nestjs/common';
import { ProjectEntity } from '../entities/project.entity';
import { IProjectRepository } from '../repositories/contract/iproject.repository';
import { IUpdateProjectUseCase } from './contract/iupdate-project.use-case';
import { IUpdateProjectPayload } from '../shared/iupdate-project-payload';

@Injectable()
export class UpdateProjectUseCase implements IUpdateProjectUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(id: number, dto: IUpdateProjectPayload): Promise<ProjectEntity> {
    return this.projectRepository.update(id, dto);
  }
}

export const UpdateProjectUseCaseProvider: Provider<IUpdateProjectUseCase> = {
  provide: IUpdateProjectUseCase,
  useClass: UpdateProjectUseCase,
};