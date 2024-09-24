import { Injectable, Provider } from '@nestjs/common';
import { IGetOneRelationshipUseCase } from './contract/iget-one-relationship.use-case';
import { IRelationshipRepository } from '../repositories/contract/irelationship.repository';
import { RelationshipEntity } from '../entities/relationship.entity';

@Injectable()
export class GetOneRelationshipUseCase implements IGetOneRelationshipUseCase {
  constructor(private readonly projectRepository: IRelationshipRepository) {}

  async execute(id: number): Promise<RelationshipEntity> {
    return this.projectRepository.getOne(id);
  }
}

export const GetOneRelationshipUseCaseProvider: Provider<IGetOneRelationshipUseCase> =
  {
    provide: IGetOneRelationshipUseCase,
    useClass: GetOneRelationshipUseCase,
  };
