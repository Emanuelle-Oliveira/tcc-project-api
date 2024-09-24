import { RelationshipEntity } from '../../entities/relationship.entity';

export abstract class IDeleteRelationshipUseCase {
  abstract execute(id: number): Promise<RelationshipEntity>;
}
