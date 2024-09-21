import { XcolumnEntity } from '../../entities/xcolumn.entity';

export abstract class IGetByTableXcolumnUseCase {
  abstract execute(tableId: number): Promise<XcolumnEntity[]>;
}
