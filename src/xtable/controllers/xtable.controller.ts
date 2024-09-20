import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateXtableDto } from '../dto/create-xtable.dto';
import { UpdateXtableDto } from '../dto/update-xtable.dto';
import { ICreateXtableUseCase } from '../use-cases/contract/icreate-xtable.use-case';
import { IUpdateXtableUseCase } from '../use-cases/contract/iupdate-xtable.use-case';
import { IGetAllXtableUseCase } from '../use-cases/contract/iget-all-xtable.use-case';
import { IGetOneXtableUseCase } from '../use-cases/contract/iget-one-xtable.use-case';
import { IGetByProjectXtableUseCase } from '../use-cases/contract/iget-by-project-xtable.use-case';
import { IDeleteXtableUseCase } from '../use-cases/contract/idelete-xtable.use-case';
import { XtableEntity } from '../entities/xtable.entity';

@Controller('table')
export class XtableController {
  constructor(
    private readonly createXtableUseCase: ICreateXtableUseCase,
    private readonly updateXtableUseCase: IUpdateXtableUseCase,
    private readonly getAllXtableUseCase: IGetAllXtableUseCase,
    private readonly getOneXtableUseCase: IGetOneXtableUseCase,
    private readonly getByProjectXtableUseCase: IGetByProjectXtableUseCase,
    private readonly deleteXtableUseCase: IDeleteXtableUseCase
  ) {}

  @Post()
  create(@Body() createXtableDto: CreateXtableDto) : Promise<XtableEntity> {
    return this.createXtableUseCase.execute(createXtableDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateXtableDto: UpdateXtableDto) : Promise<XtableEntity> {
    return this.updateXtableUseCase.execute(+id, updateXtableDto);
  }

  @Get()
  findAll() : Promise<XtableEntity[]> {
    return this.getAllXtableUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number) : Promise<XtableEntity> {
    return this.getOneXtableUseCase.execute(+id);
  }

  @Get('project/:projectId')
  findByProject(@Param('projectId') projectId: number) : Promise<XtableEntity[]> {
    return this.getByProjectXtableUseCase.execute(+projectId);
  }

  @Delete(':id')
  remove(@Param('id') id: number) : Promise<XtableEntity> {
    return this.deleteXtableUseCase.execute(+id);
  }
}
