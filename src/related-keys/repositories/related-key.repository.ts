import { Injectable, Provider } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICreateRelatedKeysPayload } from '../shared/icreate-related-keys.payload';
import { RelatedKeysEntity } from '../entities/related-keys.entity';
import { IRelatedKeysRepository } from './contract/irelated-keys.repository';
import { IUpdateRelatedKeysPayload } from '../shared/iupdate-related-keys.payload';

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

  async update(
    id: number,
    dto: IUpdateRelatedKeysPayload,
  ): Promise<RelatedKeysEntity> {
    const updatedRelatedKeys = await this.prisma.relatedKeys.update({
      where: {
        id: id,
      },
      data: dto,
    });

    return this.BuildEntity(updatedRelatedKeys);
  }

  async deleteByRelationship(
    relationshipId: number,
  ): Promise<RelatedKeysEntity[]> {
    const relatedKeysToDelete = await this.prisma.relatedKeys.findMany({
      where: {
        relationshipId: relationshipId,
      },
    });

    await this.prisma.relatedKeys.deleteMany({
      where: {
        relationshipId: relationshipId,
      },
    });

    return relatedKeysToDelete.map((relatedKey) =>
      this.BuildEntity(relatedKey),
    );
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
