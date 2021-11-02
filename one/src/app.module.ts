import { Module } from '@nestjs/common';
import { OneModule } from './one/one.module';

@Module({
  imports: [OneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
