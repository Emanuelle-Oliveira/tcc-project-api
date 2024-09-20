import { Injectable, Provider } from '@nestjs/common';
import { XtableEntity } from '../entities/xtable.entity';
import { IXtableRepository } from '../repositories/contract/ixtable.repository';
import { IGetAllXtableUseCase } from './contract/iget-all-xtable.use-case';

@Injectable()
export class GetAllXtableUseCase implements IGetAllXtableUseCase {
  constructor(private readonly xtableRepository: IXtableRepository) {}

  async execute(): Promise<XtableEntity[]> {
    return this.xtableRepository.getAll();
  }
}

export const GetAllXtableUseCaseProvider: Provider<IGetAllXtableUseCase> = {
  provide: IGetAllXtableUseCase,
  useClass: GetAllXtableUseCase,
};