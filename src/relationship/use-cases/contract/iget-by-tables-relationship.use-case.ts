import { RelationshipEntity } from '../../entities/relationship.entity';

export abstract class IGetByTablesRelationshipUseCase {
  abstract execute(
    firstTableId: number,
    secondTableId: number,
  ): Promise<RelationshipEntity[]>;
}
