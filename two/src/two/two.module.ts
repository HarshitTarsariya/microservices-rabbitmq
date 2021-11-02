import { Module } from '@nestjs/common';
import { TwoController } from './two.controller';

@Module({
  controllers: [TwoController]
})
export class TwoModule {}
