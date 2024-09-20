import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { XtableModule } from './xtable/xtable.module';

@Module({
  imports: [PrismaModule, UserModule, ProjectModule, XtableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
