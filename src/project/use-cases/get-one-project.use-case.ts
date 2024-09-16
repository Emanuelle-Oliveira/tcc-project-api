import { Injectable, Provider } from '@nestjs/common';
import { ProjectEntity } from '../entities/project.entity';
import { IProjectRepository } from '../repositories/contract/iproject.repository';
import { IGetOneProjectUseCase } from './contract/iget-one-project.use-case';

@Injectable()
export class GetOneProjectUseCase implements IGetOneProjectUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(id: number): Promise<ProjectEntity> {
    return this.projectRepository.getOne(id);
  }
}

export const GetOneProjectUseCaseProvider: Provider<IGetOneProjectUseCase> = {
  provide: IGetOneProjectUseCase,
  useClass: GetOneProjectUseCase,
};