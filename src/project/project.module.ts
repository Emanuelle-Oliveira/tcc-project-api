import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/project.controller';
import { ProjectRepositoryProvider } from './repositories/project.repository';
import { CreateProjectUseCaseProvider } from './use-cases/create-project.use-case';
import { UpdateProjectUseCaseProvider } from './use-cases/update-project.use-case';
import { GetAllProjectUseCaseProvider } from './use-cases/get-all-project.use-case';
import { GetOneProjectUseCaseProvider } from './use-cases/get-one-project.use-case';
import { DeleteProjectUseCaseProvider } from './use-cases/delete-project.use-case';
import { GetByUserProjectUseCaseProvider } from './use-cases/get-by-user-project.use-case';

@Module({
  controllers: [ProjectController],
  providers: [
    ProjectRepositoryProvider,
    CreateProjectUseCaseProvider,
    UpdateProjectUseCaseProvider,
    GetAllProjectUseCaseProvider,
    GetOneProjectUseCaseProvider,
    GetByUserProjectUseCaseProvider,
    DeleteProjectUseCaseProvider
  ],
  exports: [
    ProjectRepositoryProvider,
    CreateProjectUseCaseProvider,
    UpdateProjectUseCaseProvider,
    GetAllProjectUseCaseProvider,
    GetOneProjectUseCaseProvider,
    GetByUserProjectUseCaseProvider,
    DeleteProjectUseCaseProvider
  ]
})
export class ProjectModule {}
