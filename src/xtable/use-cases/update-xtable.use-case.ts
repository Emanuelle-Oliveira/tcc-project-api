import { Injectable, Provider } from '@nestjs/common';
import { XtableEntity } from '../entities/xtable.entity';
import { IXtableRepository } from '../repositories/contract/ixtable.repository';
import { IUpdateXtableUseCase } from './contract/iupdate-xtable.use-case';
import { IUpdateXtablePayload } from '../shared/iupdate-xtable-payload';

@Injectable()
export class UpdateXtableUseCase implements IUpdateXtableUseCase {
  constructor(private readonly xtableRepository: IXtableRepository) {}

  async execute(id: number, dto: IUpdateXtablePayload): Promise<XtableEntity> {
    return this.xtableRepository.update(id, dto);
  }
}

export const UpdateXtableUseCaseProvider: Provider<IUpdateXtableUseCase> = {
  provide: IUpdateXtableUseCase,
  useClass: UpdateXtableUseCase,
};