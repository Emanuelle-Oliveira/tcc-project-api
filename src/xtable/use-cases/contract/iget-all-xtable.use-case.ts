import { XtableEntity } from '../../entities/xtable.entity';

export abstract class IGetAllXtableUseCase {
  abstract execute(): Promise<XtableEntity[]>;
}