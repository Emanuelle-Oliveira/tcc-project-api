import { Injectable, Provider } from '@nestjs/common';
import { IGetOneXcolumnUseCase } from './contract/iget-one-xcolumn.use-case';
import { IXcolumnRepository } from '../repositories/contract/ixcolumn.repository';
import { XcolumnEntity } from '../entities/xcolumn.entity';

@Injectable()
export class GetOneXcolumnUseCase implements IGetOneXcolumnUseCase {
  constructor(private readonly projectRepository: IXcolumnRepository) {}

  async execute(id: number): Promise<XcolumnEntity> {
    return this.projectRepository.getOne(id);
  }
}

export const GetOneXcolumnUseCaseProvider: Provider<IGetOneXcolumnUseCase> = {
  provide: IGetOneXcolumnUseCase,
  useClass: GetOneXcolumnUseCase,
};
