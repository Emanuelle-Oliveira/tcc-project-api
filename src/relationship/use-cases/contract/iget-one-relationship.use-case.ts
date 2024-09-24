import { RelationshipEntity } from '../../entities/relationship.entity';

export abstract class IGetOneRelationshipUseCase {
  abstract execute(id: number): Promise<RelationshipEntity>;
}
