import { ICreateQueryPayload } from '../shared/icreate-query-payload';
import { QueryEntity } from '../entities/query.entity';
import { ICreateQueryUseCase } from './contract/icreate-query.use-case';
import { IQueryRepository } from '../repositories/contract/iquery.repository';
import { Injectable, Provider } from '@nestjs/common';
import { IXtableRepository } from '../../xtable/repositories/contract/ixtable.repository';
import { IXcolumnRepository } from '../../xcolumn/repositories/contract/ixcolumn.repository';
import { DataType } from '../../xcolumn/type/data-type/data-type.type';

@Injectable()
export class CreateQueryUseCase implements ICreateQueryUseCase {
  constructor(
    private readonly queryRepository: IQueryRepository,
    private readonly xtableRepository: IXtableRepository,
    private readonly xcolumnRepository: IXcolumnRepository,
  ) {}

  async execute(dto: ICreateQueryPayload): Promise<QueryEntity> {
    const tables = dto.tables;

    // SELECT
    let query: string = 'SELECT';

    // Campos do SELECT
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

    const mainTable = await this.xtableRepository.getOne(dto.mainTableId);

    // FROM
    query += ` FROM ${mainTable.name}`;

    if (tables.length > 1) {
    }

    // WHERE
    const conditions = dto.conditions;
    if (conditions.length > 0) {
      query += ` WHERE`;

      // Campos do WHERE
      for (let i = 0; i < conditions.length; i++) {
        const columnIds = conditions[i].columns;
        for (let i = 0; i < columnIds.length; i++) {
          const column = await this.xcolumnRepository.getOne(columnIds[i]);

          if (i === columnIds.length - 1) {
            query += ` ${column.name} = ${this.columnContentExample(column.dataType)}`;
          } else {
            query += ` ${column.name} = ${this.columnContentExample(column.dataType)} AND`;
          }
        }
      }
    }

    // ORDER BY
    const ordinations = dto.ordinations;
    if (ordinations.length > 0) {
      query += ` ORDER BY`;

      // Campos do ORDER BY
      for (let i = 0; i < ordinations.length; i++) {
        const columnIds = ordinations[i].columns;

        const column = await this.xcolumnRepository.getOne(columnIds[0]);

        query += ` ${column.name}`;
      }
    }

    console.log(query);
    // Atualiza a query gerada
    dto.query = query;

    return this.queryRepository.create(dto);
  }

  columnContentExample(columnType: DataType) {
    switch (columnType) {
      case 'String':
        return "'0456832'";
      case 'Number':
        return String(35.9);
      case 'Boolean':
        return String(true);
      case 'Date':
        return "'20240929'";
      case 'DateTime':
        return "'20240929 13:00'";
      default:
        return String("''");
    }
  }
}

export const CreateQueryUseCaseProvider: Provider<ICreateQueryUseCase> = {
  provide: ICreateQueryUseCase,
  useClass: CreateQueryUseCase,
};
