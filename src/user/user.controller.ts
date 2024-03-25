import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ){}

    @Get('list')
    root(){
        return 'Hello, list user here'
    }

    @Get('list/all')
    getListUser(){
        return this.userService.findAll();
    }

    @Get('hello')
    hello(){
        return 'user/hello'
    }
}
