import { RelationshipEntity } from '../../entities/relationship.entity';

export abstract class IGetByFirstTableRelationshipUseCase {
  abstract execute(firstTableId: number): Promise<RelationshipEntity[]>;
}
