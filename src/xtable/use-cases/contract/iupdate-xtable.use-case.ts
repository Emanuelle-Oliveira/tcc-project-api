import { XtableEntity } from '../../entities/xtable.entity';
import { IUpdateXtablePayload } from '../../shared/iupdate-xtable-payload';

export abstract class IUpdateXtableUseCase {
  abstract execute(id: number, dto: IUpdateXtablePayload): Promise<XtableEntity>;
}