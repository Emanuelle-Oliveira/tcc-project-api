import { QueryEntity } from '../../entities/query.entity';

export abstract class IGetOneQueryUseCase {
  abstract execute(id: number): Promise<QueryEntity>;
}
