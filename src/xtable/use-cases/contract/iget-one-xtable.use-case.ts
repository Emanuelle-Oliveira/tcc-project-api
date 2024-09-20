import { XtableEntity } from '../../entities/xtable.entity';

export abstract class IGetOneXtableUseCase {
  abstract execute(id: number): Promise<XtableEntity>;
}