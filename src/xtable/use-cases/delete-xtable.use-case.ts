import { Injectable, Provider } from '@nestjs/common';
import { XtableEntity } from '../entities/xtable.entity';
import { IXtableRepository } from '../repositories/contract/ixtable.repository';
import { IDeleteXtableUseCase } from './contract/idelete-xtable.use-case';

@Injectable()
export class DeleteXtableUseCase implements IDeleteXtableUseCase {
  constructor(private readonly xtableRepository: IXtableRepository) {}

  async execute(id: number): Promise<XtableEntity> {
    return this.xtableRepository.delete(id);
  }
}

export const DeleteXtableUseCaseProvider: Provider<IDeleteXtableUseCase> = {
  provide: IDeleteXtableUseCase,
  useClass: DeleteXtableUseCase,
};