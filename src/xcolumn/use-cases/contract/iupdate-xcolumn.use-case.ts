import { XcolumnEntity } from '../../entities/xcolumn.entity';
import { IUpdateXcolumnPayload } from '../../shared/iupdate-xcolumn-payload';

export abstract class IUpdateXcolumnUseCase {
  abstract execute(
    id: number,
    dto: IUpdateXcolumnPayload,
  ): Promise<XcolumnEntity>;
}
