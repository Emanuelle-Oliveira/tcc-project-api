import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { XtableModule } from './xtable/xtable.module';
import { XcolumnModule } from './xcolumn/xcolumn.module';
import { RelationshipModule } from './relationship/relationship.module';

@Module({
  imports: [PrismaModule, UserModule, ProjectModule, XtableModule, XcolumnModule, RelationshipModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
