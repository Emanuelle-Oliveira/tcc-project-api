import { Injectable, Provider } from '@nestjs/common';
import { XcolumnEntity } from '../entities/xcolumn.entity';
import { IXcolumnRepository } from '../repositories/contract/ixcolumn.repository';
import { IDeleteXcolumnUseCase } from './contract/idelete-xcolumn.use-case';

@Injectable()
export class DeleteXcolumnUseCase implements IDeleteXcolumnUseCase {
  constructor(private readonly xcolumnRepository: IXcolumnRepository) {}

  async execute(id: number): Promise<XcolumnEntity> {
    return this.xcolumnRepository.delete(id);
  }
}

export const DeleteXcolumnUseCaseProvider: Provider<IDeleteXcolumnUseCase> = {
  provide: IDeleteXcolumnUseCase,
  useClass: DeleteXcolumnUseCase,
};
