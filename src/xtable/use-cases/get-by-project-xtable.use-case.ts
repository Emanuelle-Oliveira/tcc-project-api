import { Injectable, Provider } from '@nestjs/common';
import { XtableEntity } from '../entities/xtable.entity';
import { IXtableRepository } from '../repositories/contract/ixtable.repository';
import { IGetByProjectXtableUseCase } from './contract/iget-by-project-xtable.use-case';


@Injectable()
export class GetByProjectXtableUseCase implements IGetByProjectXtableUseCase {
  constructor(private readonly xtableRepository: IXtableRepository) {}

  async execute(projectId: number): Promise<XtableEntity[]> {
    return this.xtableRepository.getByProject(projectId);
  }
}

export const GetByProjectXtableUseCaseProvider: Provider<IGetByProjectXtableUseCase> = {
  provide: IGetByProjectXtableUseCase,
  useClass: GetByProjectXtableUseCase,
};