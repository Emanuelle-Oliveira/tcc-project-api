import { IUpdateXcolumnPayload } from '../shared/iupdate-xcolumnpayload';
import { DataType } from '@prisma/client';

export class UpdateXcolumnDto implements IUpdateXcolumnPayload {
  name: string;
  alias: string;
  isForeignKey: boolean;
  isPrimaryKey: boolean;
  dataType: DataType;
  xtableId: number;
}
