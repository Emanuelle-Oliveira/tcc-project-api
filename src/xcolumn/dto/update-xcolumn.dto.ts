import { DataType } from '../type/data-type/data-type.type';
import { IUpdateXcolumnPayload } from '../shared/iupdate-xcolumn-payload';

export class UpdateXcolumnDto implements IUpdateXcolumnPayload {
  name: string;
  alias: string;
  isForeignKey: boolean;
  isPrimaryKey: boolean;
  dataType: DataType;
  xtableId: number;
}
