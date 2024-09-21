import { Injectable, Provider } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IXcolumnRepository } from './contract/ixcolumn.repository';
import { ICreateXcolumnPayload } from '../shared/icreate-xcolumn-payload';
import { XcolumnEntity } from '../entities/xcolumn.entity';
import { IUpdateXcolumnPayload } from '../shared/iupdate-xcolumnpayload';
import { Xcolumn } from '@prisma/client';

@Injectable()
export class XcolumnRepository implements IXcolumnRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: ICreateXcolumnPayload): Promise<XcolumnEntity> {
    const xcolumn = await this.prisma.xcolumn.create({
      data: dto,
    });

    return this.BuildEntity(xcolumn);
  }

  async update(id: number, dto: IUpdateXcolumnPayload): Promise<XcolumnEntity> {
    const updatedXcolumn = await this.prisma.xcolumn.update({
      where: {
        id: id,
      },
      data: dto,
    });

    return this.BuildEntity(updatedXcolumn);
  }

  async getAll(): Promise<XcolumnEntity[]> {
    const xcolumns = await this.prisma.xcolumn.findMany({
      orderBy: {
        id: 'asc',
      },
    });

    return xcolumns.map((xcolumn) => this.BuildEntity(xcolumn));
  }

  async getOne(id: number): Promise<XcolumnEntity> {
    const xcolumn = await this.prisma.xcolumn.findUnique({
      where: {
        id: id,
      },
    });

    if (xcolumn) return this.BuildEntity(xcolumn);
  }

  async getByTable(xtableId: number): Promise<XcolumnEntity[]> {
    const xcolumns = await this.prisma.xcolumn.findMany({
      where: {
        xtableId: xtableId,
      },
      orderBy: {
        id: 'asc',
      },
    });

    return xcolumns.map((xcolumn) => this.BuildEntity(xcolumn));
  }

  async delete(id: number): Promise<XcolumnEntity> {
    const deletedXcolumn = await this.prisma.xcolumn.delete({
      where: {
        id: id,
      },
    });

    return this.BuildEntity(deletedXcolumn);
  }

  private BuildEntity(payload: Xcolumn): XcolumnEntity {
    return new XcolumnEntity({
      id: payload.id,
      name: payload.name,
      alias: payload.alias,
      isForeignKey: payload.isForeignKey,
      isPrimaryKey: payload.isPrimaryKey,
      dataType: payload.dataType,
      xtableId: payload.xtableId,
    });
  }
}

export const XcolumnRepositoryProvider: Provider<IXcolumnRepository> = {
  provide: IXcolumnRepository,
  useClass: XcolumnRepository,
};
