import { Injectable, Provider } from '@nestjs/common';
import { XcolumnEntity } from '../entities/xcolumn.entity';
import { IXcolumnRepository } from '../repositories/contract/ixcolumn.repository';
import { IGetAllXcolumnUseCase } from './contract/iget-all-xcolumn.use-case';

@Injectable()
export class GetAllXcolumnUseCase implements IGetAllXcolumnUseCase {
  constructor(private readonly xcolumnRepository: IXcolumnRepository) {}

  async execute(): Promise<XcolumnEntity[]> {
    return this.xcolumnRepository.getAll();
  }
}

export const GetAllXcolumnUseCaseProvider: Provider<IGetAllXcolumnUseCase> = {
  provide: IGetAllXcolumnUseCase,
  useClass: GetAllXcolumnUseCase,
};
