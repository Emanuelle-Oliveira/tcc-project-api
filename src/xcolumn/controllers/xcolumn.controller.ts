import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateXcolumnDto } from '../dto/create-xcolumn.dto';
import { UpdateXcolumnDto } from '../dto/update-xcolumn.dto';
import { ICreateXcolumnUseCase } from '../use-cases/contract/icreate-xcolumn.use-case';
import { IUpdateXcolumnUseCase } from '../use-cases/contract/iupdate-xcolumn.use-case';
import { IGetAllXcolumnUseCase } from '../use-cases/contract/iget-all-xcolumn.use-case';
import { IGetOneXcolumnUseCase } from '../use-cases/contract/iget-one-xcolumn.use-case';
import { IDeleteXcolumnUseCase } from '../use-cases/contract/idelete-xcolumn.use-case';
import { XcolumnEntity } from '../entities/xcolumn.entity';
import { IGetByTableXcolumnUseCase } from '../use-cases/contract/iget-by-table-xcolumn.use-case';

@Controller('column')
export class XcolumnController {
  constructor(
    private readonly createXcolumnUseCase: ICreateXcolumnUseCase,
    private readonly updateXcolumnUseCase: IUpdateXcolumnUseCase,
    private readonly getAllXcolumnUseCase: IGetAllXcolumnUseCase,
    private readonly getOneXcolumnUseCase: IGetOneXcolumnUseCase,
    private readonly getByTableXcolumnUseCase: IGetByTableXcolumnUseCase,
    private readonly deleteXcolumnUseCase: IDeleteXcolumnUseCase,
  ) {}

  @Post()
  create(@Body() createXcolumnDto: CreateXcolumnDto): Promise<XcolumnEntity> {
    return this.createXcolumnUseCase.execute(createXcolumnDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateXcolumnDto: UpdateXcolumnDto,
  ): Promise<XcolumnEntity> {
    return this.updateXcolumnUseCase.execute(+id, updateXcolumnDto);
  }

  @Get()
  findAll(): Promise<XcolumnEntity[]> {
    return this.getAllXcolumnUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<XcolumnEntity> {
    return this.getOneXcolumnUseCase.execute(+id);
  }

  @Get('table/:tableId')
  findByTable(@Param('tableId') tableId: number): Promise<XcolumnEntity[]> {
    return this.getByTableXcolumnUseCase.execute(+tableId);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<XcolumnEntity> {
    return this.deleteXcolumnUseCase.execute(+id);
  }
}
