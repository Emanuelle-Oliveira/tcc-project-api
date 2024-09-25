import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateQueryDto } from '../dto/create-query.dto';
import { ICreateQueryUseCase } from '../use-cases/contract/icreate-query.use-case';
import { IGetAllQueryUseCase } from '../use-cases/contract/iget-all-query.use-case';
import { IGetOneQueryUseCase } from '../use-cases/contract/iget-one-query.use-case';
import { IDeleteQueryUseCase } from '../use-cases/contract/idelete-query.use-case';
import { QueryEntity } from '../entities/query.entity';

@Controller('query')
export class QueryController {
  constructor(
    private readonly createQueryUseCase: ICreateQueryUseCase,
    private readonly getAllQueryUseCase: IGetAllQueryUseCase,
    private readonly getOneQueryUseCase: IGetOneQueryUseCase,
    private readonly deleteQueryUseCase: IDeleteQueryUseCase,
  ) {}

  @Post()
  create(@Body() createQueryDto: CreateQueryDto): Promise<QueryEntity> {
    return this.createQueryUseCase.execute(createQueryDto);
  }

  @Get()
  findAll(): Promise<QueryEntity[]> {
    return this.getAllQueryUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<QueryEntity> {
    return this.getOneQueryUseCase.execute(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<QueryEntity> {
    return this.deleteQueryUseCase.execute(+id);
  }
}
