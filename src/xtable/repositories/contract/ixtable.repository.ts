import { ICreateXtablePayload } from '../../shared/icreate-xtable-payload';
import { IUpdateXtablePayload } from '../../shared/iupdate-xtable-payload';
import { XtableEntity } from '../../entities/xtable.entity';

export abstract class IXtableRepository {
  abstract create(dto: ICreateXtablePayload): Promise<XtableEntity>;
  abstract update(id: number, dto: IUpdateXtablePayload): Promise<XtableEntity>;
  abstract getAll(): Promise<XtableEntity[]>;
  abstract getOne(id: number): Promise<XtableEntity>;
  abstract getByProject(projectId: number): Promise<XtableEntity[]>;
  abstract delete(id: number): Promise<XtableEntity>;
}