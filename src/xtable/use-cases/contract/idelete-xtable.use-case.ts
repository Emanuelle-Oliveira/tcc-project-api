import { XtableEntity } from '../../entities/xtable.entity';

export abstract class IDeleteXtableUseCase {
  abstract execute(id: number): Promise<XtableEntity>;
}