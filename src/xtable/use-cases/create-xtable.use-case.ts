import { Injectable, Provider } from '@nestjs/common';
import { ICreateXtablePayload } from '../shared/icreate-xtable-payload';
import { XtableEntity } from '../entities/xtable.entity';
import { IXtableRepository } from '../repositories/contract/ixtable.repository';
import { ICreateXtableUseCase } from './contract/icreate-xtable.use-case';

@Injectable()
export class CreateXtableUseCase implements ICreateXtableUseCase {
  constructor(private readonly xtableRepository: IXtableRepository) {}

  async execute(dto: ICreateXtablePayload): Promise<XtableEntity> {
    return this.xtableRepository.create(dto);
  }
}

export const CreateXtableUseCaseProvider: Provider<ICreateXtableUseCase> = {
  provide: ICreateXtableUseCase,
  useClass: CreateXtableUseCase,
};