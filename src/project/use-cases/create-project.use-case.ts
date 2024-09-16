import { Injectable, Provider } from '@nestjs/common';
import { ICreateProjectPayload } from '../shared/icreate-project-payload';
import { ProjectEntity } from '../entities/project.entity';
import { ICreateProjectUseCase } from './contract/icreate-project.use-case';
import { IProjectRepository } from '../repositories/contract/iproject.repository';

@Injectable()
export class CreateProjectUseCase implements ICreateProjectUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(dto: ICreateProjectPayload): Promise<ProjectEntity> {
    return this.projectRepository.create(dto);
  }
}

export const CreateProjectUseCaseProvider: Provider<ICreateProjectUseCase> = {
  provide: ICreateProjectUseCase,
  useClass: CreateProjectUseCase,
};