import { Injectable, Provider } from '@nestjs/common';
import { ICreateRelationshipPayload } from '../shared/icreate-relationship-payload';
import { IRelationshipRepository } from './contract/irelationship.repository';
import { PrismaService } from '../../prisma/prisma.service';
import { RelationshipEntity } from '../entities/relationship.entity';
import { IUpdateRelationshipPayload } from '../shared/iupdate-relationship-payload';
import { Relationship } from '@prisma/client';

@Injectable()
export class RelationshipRepository implements IRelationshipRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: ICreateRelationshipPayload): Promise<RelationshipEntity> {
    const relationship = await this.prisma.relationship.create({
      data: dto,
    });

    return this.BuildEntity(relationship);
  }

  async update(
    id: number,
    dto: IUpdateRelationshipPayload,
  ): Promise<RelationshipEntity> {
    const updatedRelationship = await this.prisma.relationship.update({
      where: {
        id: id,
      },
      data: dto,
    });

    return this.BuildEntity(updatedRelationship);
  }

  async getAll(): Promise<RelationshipEntity[]> {
    const relationships = await this.prisma.relationship.findMany({
      orderBy: {
        id: 'asc',
      },
    });

    return relationships.map((relationship) => this.BuildEntity(relationship));
  }

  async getOne(id: number): Promise<RelationshipEntity> {
    const relationship = await this.prisma.relationship.findUnique({
      where: {
        id: id,
      },
    });

    if (relationship) return this.BuildEntity(relationship);
  }

  async getByFirstTable(firstTableId: number): Promise<RelationshipEntity[]> {
    const relationships = await this.prisma.relationship.findMany({
      where: {
        firstTableId: firstTableId,
      },
      orderBy: {
        id: 'asc',
      },
    });

    return relationships.map((relationship) => this.BuildEntity(relationship));
  }

  async delete(id: number): Promise<RelationshipEntity> {
    const deletedRelationship = await this.prisma.relationship.delete({
      where: {
        id: id,
      },
    });

    return this.BuildEntity(deletedRelationship);
  }

  private BuildEntity(payload: Relationship): RelationshipEntity {
    return new RelationshipEntity({
      id: payload.id,
      firstTableId: payload.firstTableId,
      secondTableId: payload.secondTableId,
      firstTableCardinality: payload.firstTableCardinality,
      secondTableCardinality: payload.secondTableCardinality,
    });
  }
}

export const RelationshipRepositoryProvider: Provider<IRelationshipRepository> =
  {
    provide: IRelationshipRepository,
    useClass: RelationshipRepository,
  };
