import { XcolumnEntity } from '../../entities/xcolumn.entity';
import { ICreateXcolumnPayload } from '../../shared/icreate-xcolumn-payload';
import { IUpdateXcolumnPayload } from '../../shared/iupdate-xcolumnpayload';

export abstract class IXcolumnRepository {
  abstract create(dto: ICreateXcolumnPayload): Promise<XcolumnEntity>;

  abstract update(
    id: number,
    dto: IUpdateXcolumnPayload,
  ): Promise<XcolumnEntity>;

  abstract getAll(): Promise<XcolumnEntity[]>;

  abstract getOne(id: number): Promise<XcolumnEntity>;

  abstract getByTable(projectId: number): Promise<XcolumnEntity[]>;

  abstract delete(id: number): Promise<XcolumnEntity>;
}
