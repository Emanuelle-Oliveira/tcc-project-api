import { Injectable, Provider } from '@nestjs/common';
import { ProjectEntity } from '../entities/project.entity';
import { IProjectRepository } from '../repositories/contract/iproject.repository';
import { IDeleteProjectUseCase } from './contract/idelete-project.use-case';

@Injectable()
export class DeleteProjectUseCase implements IDeleteProjectUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(id: number): Promise<ProjectEntity> {
    return this.projectRepository.delete(id);
  }
}

export const DeleteProjectUseCaseProvider: Provider<IDeleteProjectUseCase> = {
  provide: IDeleteProjectUseCase,
  useClass: DeleteProjectUseCase,
};