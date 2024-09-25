import { QueryEntity } from '../../entities/query.entity';

export abstract class IGetAllQueryUseCase {
  abstract execute(): Promise<QueryEntity[]>;
}
