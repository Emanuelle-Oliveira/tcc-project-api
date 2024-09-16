import { Injectable, Provider } from '@nestjs/common';
import { ProjectEntity } from '../entities/project.entity';
import { IProjectRepository } from '../repositories/contract/iproject.repository';
import { IGetAllProjectUseCase } from './contract/iget-all-project.use-case';

@Injectable()
export class GetAllProjectUseCase implements IGetAllProjectUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(): Promise<ProjectEntity[]> {
    return this.projectRepository.getAll();
  }
}

export const GetAllProjectUseCaseProvider: Provider<IGetAllProjectUseCase> = {
  provide: IGetAllProjectUseCase,
  useClass: GetAllProjectUseCase,
};