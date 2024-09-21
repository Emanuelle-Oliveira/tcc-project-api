import { Provider } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICreateXtablePayload } from '../shared/icreate-xtable-payload';
import { IUpdateXtablePayload } from '../shared/iupdate-xtable-payload';
import { Xcolumn, Xtable } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { XtableEntity } from '../entities/xtable.entity';
import { IXtableRepository } from './contract/ixtable.repository';
import { XcolumnEntity } from '../../xcolumn/entities/xcolumn.entity';

@Injectable()
export class XtableRepository implements IXtableRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: ICreateXtablePayload): Promise<XtableEntity> {
    const xtable = await this.prisma.xtable.create({
      data: dto,
    });

    return this.BuildEntity(xtable);
  }

  async update(id: number, dto: IUpdateXtablePayload): Promise<XtableEntity> {
    const updatedXtable = await this.prisma.xtable.update({
      where: {
        id: id,
      },
      data: dto,
    });

    return this.BuildEntity(updatedXtable);
  }

  async getAll(): Promise<XtableEntity[]> {
    const xtables = await this.prisma.xtable.findMany({
      orderBy: {
        id: 'asc',
      },
    });

    return xtables.map((xtable) => this.BuildEntity(xtable));
  }

  async getOne(id: number): Promise<XtableEntity> {
    const xtable = await this.prisma.xtable.findUnique({
      where: {
        id: id,
      },
    });

    if (xtable) return this.BuildEntity(xtable);
  }

  async getByProject(projectId: number): Promise<XtableEntity[]> {
    const xtables = await this.prisma.xtable.findMany({
      where: {
        projectId: projectId,
      },
      orderBy: {
        id: 'asc',
      },
    });

    return xtables.map((xtable) => this.BuildEntity(xtable));
  }

  async delete(id: number): Promise<XtableEntity> {
    const deletedXtable = await this.prisma.xtable.delete({
      where: {
        id: id,
      },
    });

    return this.BuildEntity(deletedXtable);
  }

  private BuildEntity(
    payload: Xtable & { xcolumns?: Xcolumn[] },
  ): XtableEntity {
    let table = new XtableEntity({
      id: payload.id,
      name: payload.name,
      alias: payload.alias,
      projectId: payload.projectId,
    });

    if (payload.xcolumns) {
      table = table.setXcolumns(
        payload.xcolumns.map((i) => new XcolumnEntity(i)),
      );
    }

    return table;
  }
}

export const XtableRepositoryProvider: Provider<IXtableRepository> = {
  provide: IXtableRepository,
  useClass: XtableRepository,
};
