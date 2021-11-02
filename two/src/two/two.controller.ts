import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('two')
export class TwoController {

    @Get()
    one():string{
        console.log('IN TWOS GET')
        return "Two";
    }

    @EventPattern('hello')
    async hello(data:string){
        console.log("IN TWO");
        return "RECEIVED DATA";
    }

    @Post('/posts')
    posts(){
        console.log('IN TWOS POST');
    }
}
