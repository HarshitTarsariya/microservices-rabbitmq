import { Module } from '@nestjs/common';
import { TwoModule } from './two/two.module';

@Module({
  imports: [TwoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
