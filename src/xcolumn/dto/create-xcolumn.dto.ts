import { ICreateXcolumnPayload } from '../shared/icreate-xcolumn-payload';
import { DataType } from '../type/data-type/data-type.type';

export class CreateXcolumnDto implements ICreateXcolumnPayload {
  name: string;
  alias: string;
  isForeignKey: boolean;
  isPrimaryKey: boolean;
  dataType: DataType;
  xtableId: number;
}
