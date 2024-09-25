import { DbType } from '../type/db-type/db-type.type';
import { Table } from '../type/table/table.type';

export interface ICreateQueryPayload {
  name: string | null;
  dbType: DbType;
  query: string;
  mainTableId: number;
  tables: Table[];
}
