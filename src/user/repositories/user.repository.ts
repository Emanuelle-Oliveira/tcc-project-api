import { Injectable, Provider } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IUserRepository } from './contract/iuser.repository';
import { ICreateUserPayload } from '../shared/icreate-user-payload';
import { UserEntity } from '../entities/user.entity';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {
  }

  async create(dto: ICreateUserPayload): Promise<UserEntity> {
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name
      },
    });

    return this.BuildEntity(user);
  }

  private BuildEntity(payload: User /*& { projects?: Project[] }*/): UserEntity {
    let user = new UserEntity({
      id: payload.id,
      email: payload.email,
      name: payload.name
    });

    /*if (payload.projects) {
      user = user.setProjects(payload.projects.map((i) => new ProjectEntity(i)));
    }*/
    return user;
  }
}

export const UserRepositoryProvider: Provider<IUserRepository> = {
  provide: IUserRepository,
  useClass: UserRepository,
};