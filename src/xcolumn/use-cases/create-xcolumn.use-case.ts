import { ICreateXcolumnPayload } from '../shared/icreate-xcolumn-payload';
import { XcolumnEntity } from '../entities/xcolumn.entity';
import { ICreateXcolumnUseCase } from './contract/icreate-xcolumn.use-case';
import { IXcolumnRepository } from '../repositories/contract/ixcolumn.repository';
import { Injectable, Provider } from '@nestjs/common';

@Injectable()
export class CreateXcolumnUseCase implements ICreateXcolumnUseCase {
  constructor(private readonly xcolumnRepository: IXcolumnRepository) {}

  async execute(dto: ICreateXcolumnPayload): Promise<XcolumnEntity> {
    return this.xcolumnRepository.create(dto);
  }
}

export const CreateXcolumnUseCaseProvider: Provider<ICreateXcolumnUseCase> = {
  provide: ICreateXcolumnUseCase,
  useClass: CreateXcolumnUseCase,
};
