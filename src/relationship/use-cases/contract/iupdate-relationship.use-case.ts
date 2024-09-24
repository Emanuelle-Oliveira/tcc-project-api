import { RelationshipEntity } from '../../entities/relationship.entity';
import { IUpdateRelationshipPayload } from '../../shared/iupdate-relationship-payload';

export abstract class IUpdateRelationshipUseCase {
  abstract execute(
    id: number,
    dto: IUpdateRelationshipPayload,
  ): Promise<RelationshipEntity>;
}
