import { Injectable, Provider } from '@nestjs/common';
import { XcolumnEntity } from '../entities/xcolumn.entity';
import { IXcolumnRepository } from '../repositories/contract/ixcolumn.repository';
import { IUpdateXcolumnUseCase } from './contract/iupdate-xcolumn.use-case';
import { IUpdateXcolumnPayload } from '../shared/iupdate-xcolumnpayload';

@Injectable()
export class UpdateXcolumnUseCase implements IUpdateXcolumnUseCase {
  constructor(private readonly xcolumnRepository: IXcolumnRepository) {}

  async execute(
    id: number,
    dto: IUpdateXcolumnPayload,
  ): Promise<XcolumnEntity> {
    return this.xcolumnRepository.update(id, dto);
  }
}

export const UpdateXcolumnUseCaseProvider: Provider<IUpdateXcolumnUseCase> = {
  provide: IUpdateXcolumnUseCase,
  useClass: UpdateXcolumnUseCase,
};
