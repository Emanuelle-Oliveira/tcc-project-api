import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { XtableModule } from './xtable/xtable.module';
import { XcolumnModule } from './xcolumn/xcolumn.module';
import { RelationshipModule } from './relationship/relationship.module';
import { QueryModule } from './query/query.module';
import { RelatedKeysModule } from './related-keys/related-keys.module';
import {
  AuthGuard,
  KeycloakConnectModule,
  RoleGuard,
} from 'nest-keycloak-connect';
import { KeycloakConfigService } from './infra/keycloak-config-service';
import { APP_GUARD } from '@nestjs/core';
import { KeycloakConfigModule } from './infra/keycloack-config.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [KeycloakConfigModule],
    }),
    ConfigModule.forRoot(),
    PrismaModule,
    UserModule,
    ProjectModule,
    XtableModule,
    XcolumnModule,
    RelationshipModule,
    QueryModule,
    RelatedKeysModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
