import { QueryEntity } from '../../entities/query.entity';

export abstract class IDeleteQueryUseCase {
  abstract execute(id: number): Promise<QueryEntity>;
}
