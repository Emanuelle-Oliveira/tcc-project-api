import { ICreateQueryPayload } from '../shared/icreate-query-payload';
import { QueryEntity } from '../entities/query.entity';
import { ICreateQueryUseCase } from './contract/icreate-query.use-case';
import { IQueryRepository } from '../repositories/contract/iquery.repository';
import { Injectable, Provider } from '@nestjs/common';

@Injectable()
export class CreateQueryUseCase implements ICreateQueryUseCase {
  constructor(private readonly queryRepository: IQueryRepository) {}

  async execute(dto: ICreateQueryPayload): Promise<QueryEntity> {
    return this.queryRepository.create(dto);
  }
}

export const CreateQueryUseCaseProvider: Provider<ICreateQueryUseCase> = {
  provide: ICreateQueryUseCase,
  useClass: CreateQueryUseCase,
};
