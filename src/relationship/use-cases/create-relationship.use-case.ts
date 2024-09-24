import { ICreateRelationshipPayload } from '../shared/icreate-relationship-payload';
import { RelationshipEntity } from '../entities/relationship.entity';
import { ICreateRelationshipUseCase } from './contract/icreate-relationship.use-case';
import { IRelationshipRepository } from '../repositories/contract/irelationship.repository';
import { Injectable, Provider } from '@nestjs/common';

@Injectable()
export class CreateRelationshipUseCase implements ICreateRelationshipUseCase {
  constructor(
    private readonly relationshipRepository: IRelationshipRepository,
  ) {}

  async execute(dto: ICreateRelationshipPayload): Promise<RelationshipEntity> {
    return this.relationshipRepository.create(dto);
  }
}

export const CreateRelationshipUseCaseProvider: Provider<ICreateRelationshipUseCase> =
  {
    provide: ICreateRelationshipUseCase,
    useClass: CreateRelationshipUseCase,
  };
