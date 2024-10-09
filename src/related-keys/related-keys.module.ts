import { Module } from '@nestjs/common';
import { RelatedKeysRepositoryProvider } from './repositories/related-key.repository';

@Module({
  controllers: [],
  providers: [RelatedKeysRepositoryProvider],
  exports: [RelatedKeysRepositoryProvider],
})
export class RelatedKeysModule {}
