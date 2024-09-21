import { DataType } from '@prisma/client';

export class XcolumnEntity {
  id: number;
  name: string;
  alias: string;
  isForeignKey: boolean;
  isPrimaryKey: boolean;
  dataType: DataType;
  xtableId: number;

  constructor(payload: {
    id: number;
    name: string;
    alias: string;
    isForeignKey: boolean;
    isPrimaryKey: boolean;
    dataType: DataType;
    xtableId: number;
  }) {
    this.id = payload.id;
    this.name = payload.name;
    this.alias = payload.alias;
    this.isForeignKey = payload.isForeignKey;
    this.isPrimaryKey = payload.isPrimaryKey;
    this.dataType = payload.dataType;
    this.xtableId = payload.xtableId;
  }
}
