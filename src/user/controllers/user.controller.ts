import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { ICreateUserUseCase } from '../use-cases/contract/icreate-user.use-case';
import { IUpdateUserUseCase } from '../use-cases/contract/iupdate-user.use-case';
import { IGetOneUserUseCase } from '../use-cases/contract/iget-one-user.use-case';
import { IGetAllUserUseCase } from '../use-cases/contract/iget-all-user.use-case';
import { IDeleteUserUseCase } from '../use-cases/contract/idelete-user.use-case';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: ICreateUserUseCase,
    private readonly updateUserUseCase: IUpdateUserUseCase,
    private readonly getAllUserUseCase: IGetAllUserUseCase,
    private readonly getOneUserUseCase: IGetOneUserUseCase,
    private readonly deleteUserUseCase: IDeleteUserUseCase
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) : Promise<UserEntity> {
    return this.updateUserUseCase.execute(+id, updateUserDto);
  }

  @Get()
  findAll() : Promise<UserEntity[]> {
    return this.getAllUserUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number) : Promise<UserEntity> {
    return this.getOneUserUseCase.execute(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) : Promise<UserEntity> {
    return this.deleteUserUseCase.execute(+id);
  }
}
