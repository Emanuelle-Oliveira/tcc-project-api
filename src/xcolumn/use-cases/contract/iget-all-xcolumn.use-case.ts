import { XcolumnEntity } from '../../entities/xcolumn.entity';

export abstract class IGetAllXcolumnUseCase {
  abstract execute(): Promise<XcolumnEntity[]>;
}
