import { DbType } from '../type/db-type/db-type.type';

export class QueryEntity {
  id: number;
  name: string | null;
  query: string;
  dbType: DbType;
  mainTableId: number;

  constructor(payload: {
    id: number;
    name: string | null;
    query: string;
    dbType: DbType;
    mainTableId: number;
  }) {
    this.id = payload.id;
    this.name = payload.name;
    this.query = payload.query;
    this.dbType = payload.dbType;
    this.mainTableId = payload.mainTableId;
  }
}
