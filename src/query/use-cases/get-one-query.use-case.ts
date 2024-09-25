import { Injectable, Provider } from '@nestjs/common';
import { IGetOneQueryUseCase } from './contract/iget-one-query.use-case';
import { IQueryRepository } from '../repositories/contract/iquery.repository';
import { QueryEntity } from '../entities/query.entity';

@Injectable()
export class GetOneQueryUseCase implements IGetOneQueryUseCase {
  constructor(private readonly projectRepository: IQueryRepository) {}

  async execute(id: number): Promise<QueryEntity> {
    return this.projectRepository.getOne(id);
  }
}

export const GetOneQueryUseCaseProvider: Provider<IGetOneQueryUseCase> = {
  provide: IGetOneQueryUseCase,
  useClass: GetOneQueryUseCase,
};
