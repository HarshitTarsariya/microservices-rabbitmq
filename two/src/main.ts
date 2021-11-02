import { NestFactory } from '@nestjs/core';
import {  Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3001);
  // const app = await NestFactory.createMicroservice(AppModule, {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [''],        //AMQP URL
  //     queue: 'main_queue',
  //     queueOptions: {
  //       durable: false
  //     },
  //   },
  // });
  // app.listen();
}
bootstrap();
