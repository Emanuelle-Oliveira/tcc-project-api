import { DataType } from '../type/data-type/data-type.type';

export interface IUpdateXcolumnPayload {
  name: string;
  alias: string;
  isForeignKey: boolean;
  isPrimaryKey: boolean;
  dataType: DataType;
  xtableId: number;
}
