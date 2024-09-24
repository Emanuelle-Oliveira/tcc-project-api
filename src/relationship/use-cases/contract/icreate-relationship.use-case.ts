import { ICreateRelationshipPayload } from '../../shared/icreate-relationship-payload';
import { RelationshipEntity } from '../../entities/relationship.entity';

export abstract class ICreateRelationshipUseCase {
  abstract execute(
    dto: ICreateRelationshipPayload,
  ): Promise<RelationshipEntity>;
}
