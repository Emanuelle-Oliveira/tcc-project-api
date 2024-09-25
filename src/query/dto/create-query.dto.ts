import { ICreateQueryPayload } from '../shared/icreate-query-payload';
import { DbType } from '../type/db-type/db-type.type';

export class CreateQueryDto implements ICreateQueryPayload {
  dbType: DbType;
  mainTableId: number;
  name: string | null;
  query: string;
}
