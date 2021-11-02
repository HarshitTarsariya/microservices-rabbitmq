import { HttpService } from '@nestjs/axios';
import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { get } from 'http';
const axios=require('axios');
@Controller('one')
export class OneController {
    constructor(
        // @Inject('ONE_SERVICE') private readonly client: ClientProxy,
        private httpService: HttpService
    ) {

    }
    @Get()
    async one(): Promise<string> {
        // this.client.emit('hello', 'Hello from one using rabbitmq');
        axios.post("http://localhost:3001/two/posts",{}).then(response => {}).catch(er=>{
            console.log(er.message);
        });
        return "One12345";
    }
}
