import { ICreateQueryPayload } from '../shared/icreate-query-payload';
import { QueryEntity } from '../entities/query.entity';
import { ICreateQueryUseCase } from './contract/icreate-query.use-case';
import { IQueryRepository } from '../repositories/contract/iquery.repository';
import { Injectable, Provider } from '@nestjs/common';
import { IXtableRepository } from '../../xtable/repositories/contract/ixtable.repository';
import { IXcolumnRepository } from '../../xcolumn/repositories/contract/ixcolumn.repository';
import { DataType } from '../../xcolumn/type/data-type/data-type.type';
import { IRelationshipRepository } from '../../relationship/repositories/contract/irelationship.repository';
import { IRelatedKeysRepository } from '../../related-keys/repositories/contract/irelated-keys.repository';

@Injectable()
export class CreateQueryUseCase implements ICreateQueryUseCase {
  constructor(
    private readonly queryRepository: IQueryRepository,
    private readonly xtableRepository: IXtableRepository,
    private readonly xcolumnRepository: IXcolumnRepository,
    private readonly relationshipRepository: IRelationshipRepository,
    private readonly relatedKeysRepository: IRelatedKeysRepository,
  ) {}

  async execute(dto: ICreateQueryPayload): Promise<QueryEntity> {
    const tables = dto.tables;

    // SELECT
    let query: string = 'SELECT';

    // Campos do SELECT
    for (let i = 0; i < tables.length; i++) {
      if (tables[i].columns.length > 0) {
        const columnIds = tables[i].columns;

        for (let j = 0; j < columnIds.length; j++) {
          const column = await this.xcolumnRepository.getOne(columnIds[j]);

          if (j === columnIds.length - 1 && i === tables.length - 1) {
            query += ` ${column.name}`;
          } else {
            query += ` ${column.name},`;
          }
        }
      }
    }

    if (query === 'SELECT') {
      query += ` *`;
    }

    const mainTable = await this.xtableRepository.getOne(dto.mainTableId);

    // FROM
    query += ` FROM ${mainTable.name}`;

    if (tables.length > 1) {
      for (let i = 1; i < tables.length; i++) {
        const relationship = await this.relationshipRepository.getByTables(
          mainTable.id,
          tables[i].tableId,
        );

        const joinTable = await this.xtableRepository.getOne(tables[i].tableId);

        console.log(relationship[0]);

        if (
          relationship[0].secondTableCardinality === 'C1N' ||
          relationship[0].secondTableCardinality === 'C11'
        ) {
          query += ` INNER JOIN`;
        } else {
          query += ` LEFT JOIN`;
        }

        query += ` ${joinTable.name} ON`;

        const relatedKeys = await this.relatedKeysRepository.getByRelationship(
          relationship[0].id,
        );
        console.log(relatedKeys);

        for (let i = 0; i < relatedKeys.length; i++) {
          const firstColumn = await this.xcolumnRepository.getOne(
            relatedKeys[i].firstColumnId,
          );
          const secondColumn = await this.xcolumnRepository.getOne(
            relatedKeys[i].secondColumnId,
          );

          if (i === relatedKeys.length - 1) {
            query += ` ${mainTable.name}.${firstColumn.name} = ${joinTable.name}.${secondColumn.name}`;
          } else {
            query += ` ${mainTable.name}.${firstColumn.name} = ${joinTable.name}.${secondColumn.name} AND`;
          }
        }
      }
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
    /*const ordinations = dto.ordinations;
    if (ordinations.length > 0) {
      query += ` ORDER BY`;

      // Campos do ORDER BY
      for (let i = 0; i < ordinations.length; i++) {
        const columnIds = ordinations[i].columns;

        const column = await this.xcolumnRepository.getOne(columnIds[0]);

        query += ` ${column.name}`;
      }
    }*/

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
