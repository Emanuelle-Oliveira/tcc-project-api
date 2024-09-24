import { RelationshipEntity } from '../../entities/relationship.entity';
import { ICreateRelationshipPayload } from '../../shared/icreate-relationship-payload';
import { IUpdateRelationshipPayload } from '../../shared/iupdate-relationship-payload';

export abstract class IRelationshipRepository {
  abstract create(dto: ICreateRelationshipPayload): Promise<RelationshipEntity>;

  abstract update(
    id: number,
    dto: IUpdateRelationshipPayload,
  ): Promise<RelationshipEntity>;

  abstract getAll(): Promise<RelationshipEntity[]>;

  abstract getOne(id: number): Promise<RelationshipEntity>;

  abstract getByFirstTable(firstTableId: number): Promise<RelationshipEntity[]>;

  abstract delete(id: number): Promise<RelationshipEntity>;
}
