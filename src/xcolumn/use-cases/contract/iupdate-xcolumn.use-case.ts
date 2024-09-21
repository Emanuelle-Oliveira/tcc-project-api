import { IUpdateXcolumnPayload } from '../../shared/iupdate-xcolumnpayload';
import { XcolumnEntity } from '../../entities/xcolumn.entity';

export abstract class IUpdateXcolumnUseCase {
  abstract execute(
    id: number,
    dto: IUpdateXcolumnPayload,
  ): Promise<XcolumnEntity>;
}
