import { Injectable, Provider } from '@nestjs/common';
import { ProjectEntity } from '../entities/project.entity';
import { IProjectRepository } from '../repositories/contract/iproject.repository';
import { IGetByUserProjectUseCase } from './contract/iget-by-user-project.use-case';

@Injectable()
export class GetByUserProjectUseCase implements IGetByUserProjectUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(userId: number): Promise<ProjectEntity[]> {
    return this.projectRepository.getByUser(userId);
  }
}

export const GetByUserProjectUseCaseProvider: Provider<IGetByUserProjectUseCase> = {
  provide: IGetByUserProjectUseCase,
  useClass: GetByUserProjectUseCase,
};