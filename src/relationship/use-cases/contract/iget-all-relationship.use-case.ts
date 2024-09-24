import { RelationshipEntity } from '../../entities/relationship.entity';

export abstract class IGetAllRelationshipUseCase {
  abstract execute(): Promise<RelationshipEntity[]>;
}
