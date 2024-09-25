import { ICreateQueryPayload } from '../../shared/icreate-query-payload';
import { QueryEntity } from '../../entities/query.entity';

export abstract class ICreateQueryUseCase {
  abstract execute(dto: ICreateQueryPayload): Promise<QueryEntity>;
}
