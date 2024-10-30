import { QueryEntity } from '../../entities/query.entity';
import { ICreateQueryPayload } from '../../shared/icreate-query-payload';

export abstract class IQueryRepository {
  abstract create(dto: ICreateQueryPayload): Promise<QueryEntity>;

  abstract getAll(): Promise<QueryEntity[]>;

  abstract getOne(id: number): Promise<QueryEntity>;

  abstract getByTables(tableIds: number[]): Promise<QueryEntity[]>;

  // abstract getByFirstTable(firstTableId: number): Promise<QueryEntity[]>;

  abstract delete(id: number): Promise<QueryEntity>;
}
