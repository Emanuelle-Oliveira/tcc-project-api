import { QueryEntity } from '../../entities/query.entity';

export abstract class IGetQueryByProjectUseCase {
  abstract execute(projectId: number): Promise<QueryEntity[]>;
}
