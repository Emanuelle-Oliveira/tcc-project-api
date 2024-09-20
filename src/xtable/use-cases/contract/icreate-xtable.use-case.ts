import { XtableEntity } from '../../entities/xtable.entity';
import { ICreateXtablePayload } from '../../shared/icreate-xtable-payload';

export abstract class ICreateXtableUseCase {
  abstract execute(dto: ICreateXtablePayload): Promise<XtableEntity>;
}