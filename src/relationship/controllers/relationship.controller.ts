import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateRelationshipDto } from '../dto/create-relationship.dto';
import { UpdateRelationshipDto } from '../dto/update-relationship.dto';
import { ICreateRelationshipUseCase } from '../use-cases/contract/icreate-relationship.use-case';
import { IUpdateRelationshipUseCase } from '../use-cases/contract/iupdate-relationship.use-case';
import { IGetAllRelationshipUseCase } from '../use-cases/contract/iget-all-relationship.use-case';
import { IGetOneRelationshipUseCase } from '../use-cases/contract/iget-one-relationship.use-case';
import { IDeleteRelationshipUseCase } from '../use-cases/contract/idelete-relationship.use-case';
import { RelationshipEntity } from '../entities/relationship.entity';
import { IGetByFirstTableRelationshipUseCase } from '../use-cases/contract/iget-by-first-table-relationship.use-case';

@Controller('relationship')
export class RelationshipController {
  constructor(
    private readonly createRelationshipUseCase: ICreateRelationshipUseCase,
    private readonly updateRelationshipUseCase: IUpdateRelationshipUseCase,
    private readonly getAllRelationshipUseCase: IGetAllRelationshipUseCase,
    private readonly getOneRelationshipUseCase: IGetOneRelationshipUseCase,
    private readonly getByFirstTableRelationshipUseCase: IGetByFirstTableRelationshipUseCase,
    private readonly deleteRelationshipUseCase: IDeleteRelationshipUseCase,
  ) {}

  @Post()
  create(
    @Body() createRelationshipDto: CreateRelationshipDto,
  ): Promise<RelationshipEntity> {
    return this.createRelationshipUseCase.execute(createRelationshipDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateRelationshipDto: UpdateRelationshipDto,
  ): Promise<RelationshipEntity> {
    return this.updateRelationshipUseCase.execute(+id, updateRelationshipDto);
  }

  @Get()
  findAll(): Promise<RelationshipEntity[]> {
    return this.getAllRelationshipUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<RelationshipEntity> {
    return this.getOneRelationshipUseCase.execute(+id);
  }

  @Get('table/:firstTableId')
  findByFirstTable(
    @Param('firstTableId') firstTableId: number,
  ): Promise<RelationshipEntity[]> {
    return this.getByFirstTableRelationshipUseCase.execute(+firstTableId);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<RelationshipEntity> {
    return this.deleteRelationshipUseCase.execute(+id);
  }
}
