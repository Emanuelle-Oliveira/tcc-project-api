import { DbType } from '../type/db-type/db-type.type';

export interface ICreateQueryPayload {
  name: string | null;
  query: string;
  dbType: DbType;
  mainTableId: number;
}
