import { Injectable, Provider } from '@nestjs/common';
import { QueryEntity } from '../entities/query.entity';
import { IQueryRepository } from '../repositories/contract/iquery.repository';
import { IGetQueryByProjectUseCase } from './contract/iget-query-by-project.use-case';
import { IXtableRepository } from '../../xtable/repositories/contract/ixtable.repository';

@Injectable()
export class GetQueryByProjectUseCase implements IGetQueryByProjectUseCase {
  constructor(
    private readonly queryRepository: IQueryRepository,
    private readonly tableRepository: IXtableRepository,
  ) {}

  async execute(projectId: number): Promise<QueryEntity[]> {
    const tables = await this.tableRepository.getByProject(projectId);

    const tableIds = tables.map((table) => table.id);

    return this.queryRepository.getByTables(tableIds);
  }
}

export const GetQueryByProjectUseCaseProvider: Provider<IGetQueryByProjectUseCase> =
  {
    provide: IGetQueryByProjectUseCase,
    useClass: GetQueryByProjectUseCase,
  };
