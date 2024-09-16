import { ICreateProjectPayload } from '../../shared/icreate-project-payload';
import { IUpdateProjectPayload } from '../../shared/iupdate-project-payload';
import { ProjectEntity } from '../../entities/project.entity';


export abstract class IProjectRepository {
  abstract create(dto: ICreateProjectPayload): Promise<ProjectEntity>;
  abstract update(id: number, dto: IUpdateProjectPayload): Promise<ProjectEntity>;
  abstract getAll(): Promise<ProjectEntity[]>;
  abstract getOne(id: number): Promise<ProjectEntity>;
  abstract getByUser(userId: number): Promise<ProjectEntity[]>;
  abstract delete(id: number): Promise<ProjectEntity>;
}