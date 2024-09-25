import { ICreateQueryPayload } from '../shared/icreate-query-payload';
import { QueryEntity } from '../entities/query.entity';
import { ICreateQueryUseCase } from './contract/icreate-query.use-case';
import { IQueryRepository } from '../repositories/contract/iquery.repository';
import { Injectable, Provider } from '@nestjs/common';
import { IXtableRepository } from '../../xtable/repositories/contract/ixtable.repository';
import { IXcolumnRepository } from '../../xcolumn/repositories/contract/ixcolumn.repository';

@Injectable()
export class CreateQueryUseCase implements ICreateQueryUseCase {
  constructor(
    private readonly queryRepository: IQueryRepository,
    private readonly xtableRepository: IXtableRepository,
    private readonly xcolumnRepository: IXcolumnRepository,
  ) {}

  async execute(dto: ICreateQueryPayload): Promise<QueryEntity> {
    const tables = dto.tables;
    let query: string = 'SELECT';

    if (tables.length > 1) {
      console.log('maior que 1');
    } else {
      const tableId = tables[0].tableId;
      const table = await this.xtableRepository.getOne(tableId);
      const tableName = table.name;

      if (tables[0].columns.length > 0) {
        const columnIds = tables[0].columns;

        for (let i = 0; i < columnIds.length; i++) {
          const column = await this.xcolumnRepository.getOne(columnIds[i]);

          if (i === columnIds.length - 1) {
            query += ` ${column.name}`;
          } else {
            query += ` ${column.name},`;
          }
        }
      } else {
        query += ` *`;
      }

      query += ` FROM ${tableName}`;
    }

    console.log(query);
    dto.query = query;

    return this.queryRepository.create(dto);
  }
}

export const CreateQueryUseCaseProvider: Provider<ICreateQueryUseCase> = {
  provide: ICreateQueryUseCase,
  useClass: CreateQueryUseCase,
};
