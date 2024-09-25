import { Injectable, Provider } from '@nestjs/common';
import { QueryEntity } from '../entities/query.entity';
import { IQueryRepository } from '../repositories/contract/iquery.repository';
import { IDeleteQueryUseCase } from './contract/idelete-query.use-case';

@Injectable()
export class DeleteQueryUseCase implements IDeleteQueryUseCase {
  constructor(private readonly queryRepository: IQueryRepository) {}

  async execute(id: number): Promise<QueryEntity> {
    return this.queryRepository.delete(id);
  }
}

export const DeleteQueryUseCaseProvider: Provider<IDeleteQueryUseCase> = {
  provide: IDeleteQueryUseCase,
  useClass: DeleteQueryUseCase,
};
