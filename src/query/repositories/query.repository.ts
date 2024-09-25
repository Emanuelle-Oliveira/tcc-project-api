import { ICreateQueryPayload } from '../shared/icreate-query-payload';
import { Injectable, Provider } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { QueryEntity } from '../entities/query.entity';
import { Query } from '@prisma/client';
import { IQueryRepository } from './contract/iquery.repository';

@Injectable()
export class QueryRepository implements IQueryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: ICreateQueryPayload): Promise<QueryEntity> {
    const query = await this.prisma.query.create({
      data: dto,
    });

    return this.BuildEntity(query);
  }

  async getAll(): Promise<QueryEntity[]> {
    const querys = await this.prisma.query.findMany({
      orderBy: {
        id: 'asc',
      },
    });

    return querys.map((query) => this.BuildEntity(query));
  }

  async getOne(id: number): Promise<QueryEntity> {
    const query = await this.prisma.query.findUnique({
      where: {
        id: id,
      },
    });

    if (query) return this.BuildEntity(query);
  }

  // async getByFirstTable(firstTableId: number): Promise<QueryEntity[]> {
  //   const querys = await this.prisma.query.findMany({
  //     where: {
  //       firstTableId: firstTableId,
  //     },
  //     orderBy: {
  //       id: 'asc',
  //     },
  //   });
  //
  //   return querys.map((query) => this.BuildEntity(query));
  // }

  async delete(id: number): Promise<QueryEntity> {
    const deletedQuery = await this.prisma.query.delete({
      where: {
        id: id,
      },
    });

    return this.BuildEntity(deletedQuery);
  }

  private BuildEntity(payload: Query): QueryEntity {
    return new QueryEntity({
      id: payload.id,
      name: payload.name,
      query: payload.query,
      dbType: payload.dbType,
      mainTableId: payload.mainTableId,
    });
  }
}

export const QueryRepositoryProvider: Provider<IQueryRepository> = {
  provide: IQueryRepository,
  useClass: QueryRepository,
};
