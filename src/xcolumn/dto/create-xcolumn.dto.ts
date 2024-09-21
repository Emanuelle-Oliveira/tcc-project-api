import { ICreateXcolumnPayload } from '../shared/icreate-xcolumn-payload';
import { DataType } from '@prisma/client';

export class CreateXcolumnDto implements ICreateXcolumnPayload {
  name: string;
  alias: string;
  isForeignKey: boolean;
  isPrimaryKey: boolean;
  dataType: DataType;
  xtableId: number;
}
