import { DataType } from '@prisma/client';

export interface ICreateXcolumnPayload {
  name: string;
  alias: string;
  isForeignKey: boolean;
  isPrimaryKey: boolean;
  dataType: DataType;
  xtableId: number;
}
