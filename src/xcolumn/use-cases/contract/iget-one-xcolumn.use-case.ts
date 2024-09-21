import { XcolumnEntity } from '../../entities/xcolumn.entity';

export abstract class IGetOneXcolumnUseCase {
  abstract execute(id: number): Promise<XcolumnEntity>;
}
