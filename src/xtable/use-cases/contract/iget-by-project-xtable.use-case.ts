import { XtableEntity } from '../../entities/xtable.entity';

export abstract class IGetByProjectXtableUseCase {
  abstract execute(projectId: number): Promise<XtableEntity[]>;
}