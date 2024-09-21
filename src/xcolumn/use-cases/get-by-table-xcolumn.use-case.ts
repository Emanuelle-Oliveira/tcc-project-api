import { Injectable, Provider } from '@nestjs/common';
import { XcolumnEntity } from '../entities/xcolumn.entity';
import { IXcolumnRepository } from '../repositories/contract/ixcolumn.repository';
import { IGetByTableXcolumnUseCase } from './contract/iget-by-table-xcolumn.use-case';

@Injectable()
export class GetByTableXcolumnUseCase implements IGetByTableXcolumnUseCase {
  constructor(private readonly xcolumnRepository: IXcolumnRepository) {}

  async execute(tableId: number): Promise<XcolumnEntity[]> {
    return this.xcolumnRepository.getByTable(tableId);
  }
}

export const GetByTableXcolumnUseCaseProvider: Provider<IGetByTableXcolumnUseCase> =
  {
    provide: IGetByTableXcolumnUseCase,
    useClass: GetByTableXcolumnUseCase,
  };
