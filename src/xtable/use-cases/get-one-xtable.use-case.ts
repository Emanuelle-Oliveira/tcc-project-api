import { Injectable, Provider } from '@nestjs/common';

import { IGetOneXtableUseCase } from './contract/iget-one-xtable.use-case';
import { IXtableRepository } from '../repositories/contract/ixtable.repository';
import { XtableEntity } from '../entities/xtable.entity';

@Injectable()
export class GetOneXtableUseCase implements IGetOneXtableUseCase {
  constructor(private readonly projectRepository: IXtableRepository) {}

  async execute(id: number): Promise<XtableEntity> {
    return this.projectRepository.getOne(id);
  }
}

export const GetOneXtableUseCaseProvider: Provider<IGetOneXtableUseCase> = {
  provide: IGetOneXtableUseCase,
  useClass: GetOneXtableUseCase,
};