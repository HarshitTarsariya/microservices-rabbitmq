import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OneController } from './one.controller';

@Module({
  imports:[
    // ClientsModule.register([
    //   {
    //     name: 'ONE_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: [''],  //AMQP URL
    //       queue: 'main_queue',
    //       queueOptions: {
    //         durable: false
    //       },
    //     },
    //   },
    // ]),
    HttpModule
  ],
  controllers: [OneController]
})
export class OneModule {}
