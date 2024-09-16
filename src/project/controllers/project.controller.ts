import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { ICreateProjectUseCase } from '../use-cases/contract/icreate-project.use-case';
import { IUpdateProjectUseCase } from '../use-cases/contract/iupdate-project.use-case';
import { IGetAllProjectUseCase } from '../use-cases/contract/iget-all-project.use-case';
import { IGetOneProjectUseCase } from '../use-cases/contract/iget-one-project.use-case';
import { IDeleteProjectUseCase } from '../use-cases/contract/idelete-project.use-case';
import { ProjectEntity } from '../entities/project.entity';
import { IGetByUserProjectUseCase } from '../use-cases/contract/iget-by-user-project.use-case';

@Controller('project')
export class ProjectController {
  constructor(
    private readonly createProjectUseCase: ICreateProjectUseCase,
    private readonly updateProjectUseCase: IUpdateProjectUseCase,
    private readonly getAllProjectUseCase: IGetAllProjectUseCase,
    private readonly getOneProjectUseCase: IGetOneProjectUseCase,
    private readonly getByUserProjectUseCase: IGetByUserProjectUseCase,
    private readonly deleteProjectUseCase: IDeleteProjectUseCase
  ) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) : Promise<ProjectEntity> {
    return this.createProjectUseCase.execute(createProjectDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) : Promise<ProjectEntity> {
    return this.updateProjectUseCase.execute(+id, updateProjectDto);
  }

  @Get()
  findAll() : Promise<ProjectEntity[]> {
    return this.getAllProjectUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number) : Promise<ProjectEntity> {
    return this.getOneProjectUseCase.execute(+id);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: number) : Promise<ProjectEntity[]> {
    return this.getByUserProjectUseCase.execute(+userId);
  }

  @Delete(':id')
  remove(@Param('id') id: number) : Promise<ProjectEntity> {
    return this.deleteProjectUseCase.execute(+id);
  }
}
