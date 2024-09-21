import { XcolumnEntity } from '../../entities/xcolumn.entity';

export abstract class IDeleteXcolumnUseCase {
  abstract execute(id: number): Promise<XcolumnEntity>;
}
