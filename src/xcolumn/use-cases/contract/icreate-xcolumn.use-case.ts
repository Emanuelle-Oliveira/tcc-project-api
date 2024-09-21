import { ICreateXcolumnPayload } from '../../shared/icreate-xcolumn-payload';
import { XcolumnEntity } from '../../entities/xcolumn.entity';

export abstract class ICreateXcolumnUseCase {
  abstract execute(dto: ICreateXcolumnPayload): Promise<XcolumnEntity>;
}
