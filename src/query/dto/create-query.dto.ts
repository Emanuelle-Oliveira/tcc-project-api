import { ICreateQueryPayload } from '../shared/icreate-query-payload';
import { DbType } from '../type/db-type/db-type.type';
import { Table } from '../type/table/table.type';

export class CreateQueryDto implements ICreateQueryPayload {
  name: string | null;
  dbType: DbType;
  query: string;
  mainTableId: number;
  tables: Table[];
}
