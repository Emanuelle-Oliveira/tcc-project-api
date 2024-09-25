import { Injectable, Provider } from '@nestjs/common';
import { QueryEntity } from '../entities/query.entity';
import { IQueryRepository } from '../repositories/contract/iquery.repository';
import { IGetAllQueryUseCase } from './contract/iget-all-query.use-case';

@Injectable()
export class GetAllQueryUseCase implements IGetAllQueryUseCase {
  constructor(private readonly queryRepository: IQueryRepository) {}

  async execute(): Promise<QueryEntity[]> {
    return this.queryRepository.getAll();
  }
}

export const GetAllQueryUseCaseProvider: Provider<IGetAllQueryUseCase> = {
  provide: IGetAllQueryUseCase,
  useClass: GetAllQueryUseCase,
};
