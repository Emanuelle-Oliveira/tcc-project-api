import { Injectable, Provider } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICreateRelatedKeysPayload } from '../shared/icreate-related-keys.payload';
import { RelatedKeysEntity } from '../entities/related-keys.entity';
import { IRelatedKeysRepository } from './contract/irelated-keys.repository';

@Injectable()
export class RelatedKeysRepository implements IRelatedKeysRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: ICreateRelatedKeysPayload): Promise<RelatedKeysEntity> {
    const relatedKeys = await this.prisma.relatedKeys.create({
      data: dto,
    });

    return this.BuildEntity(relatedKeys);
  }

  async getByRelationship(
    relationshipId: number,
  ): Promise<RelatedKeysEntity[]> {
    const relatedKeys = await this.prisma.relatedKeys.findMany({
      where: {
        relationshipId: relationshipId,
      },
      orderBy: {
        id: 'asc',
      },
    });

    return relatedKeys.map((relatedKey) => this.BuildEntity(relatedKey));
  }

  async delete(id: number): Promise<RelatedKeysEntity> {
    const deletedRelatedKeys = await this.prisma.relatedKeys.delete({
      where: {
        id: id,
      },
    });

    return this.BuildEntity(deletedRelatedKeys);
  }

  private BuildEntity(payload: RelatedKeysEntity): RelatedKeysEntity {
    return new RelatedKeysEntity({
      id: payload.id,
      firstColumnId: payload.firstColumnId,
      secondColumnId: payload.secondColumnId,
      relationshipId: payload.relationshipId,
    });
  }
}

export const RelatedKeysRepositoryProvider: Provider<IRelatedKeysRepository> = {
  provide: IRelatedKeysRepository,
  useClass: RelatedKeysRepository,
};
