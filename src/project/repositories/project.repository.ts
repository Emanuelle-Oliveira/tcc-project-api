import { Injectable, Provider } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IProjectRepository } from './contract/iproject.repository';
import { IUpdateProjectPayload } from '../shared/iupdate-project-payload';
import { ProjectEntity } from '../entities/project.entity';
import { Project, Xtable } from '@prisma/client';
import { ICreateProjectPayload } from '../shared/icreate-project-payload';
import { XtableEntity } from '../../xtable/entities/xtable.entity';

@Injectable()
export class ProjectRepository implements IProjectRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: ICreateProjectPayload): Promise<ProjectEntity> {
    const project = await this.prisma.project.create({
      data: dto,
    });

    return this.BuildEntity(project);
  }

  async update(id: number, dto: IUpdateProjectPayload): Promise<ProjectEntity> {
    const updatedProject = await this.prisma.project.update({
      where: {
        id: id,
      },
      data: dto,
    });

    return this.BuildEntity(updatedProject);
  }

  async getAll(): Promise<ProjectEntity[]> {
    const projects = await this.prisma.project.findMany({
      orderBy: {
        id: 'asc',
      },
    });

    return projects.map((project) => this.BuildEntity(project));
  }

  async getOne(id: number): Promise<ProjectEntity> {
    const project = await this.prisma.project.findUnique({
      where: {
        id: id,
      },
    });

    if (project) return this.BuildEntity(project);
  }

  async getByUser(userId: number): Promise<ProjectEntity[]> {
    const projects = await this.prisma.project.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        id: 'asc',
      },
    });

    return projects.map((project) => this.BuildEntity(project));
  }

  async delete(id: number): Promise<ProjectEntity> {
    const deletedProject = await this.prisma.project.delete({
      where: {
        id: id,
      },
    });

    return this.BuildEntity(deletedProject);
  }

  private BuildEntity(
    payload: Project & { xtables?: Xtable[] },
  ): ProjectEntity {
    let project = new ProjectEntity({
      id: payload.id,
      name: payload.name,
      userId: payload.userId,
    });

    if (payload.xtables) {
      project = project.setXtables(
        payload.xtables.map((i) => new XtableEntity(i)),
      );
    }

    return project;
  }
}

export const ProjectRepositoryProvider: Provider<IProjectRepository> = {
  provide: IProjectRepository,
  useClass: ProjectRepository,
};
