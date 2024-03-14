import { Controller, Get, Header, HttpCode, Inject, Optional, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from "express";
import { json } from 'stream/consumers';
import { UserService } from './user.service';
import { Connection } from '../connection/connection';
import { MailService } from '../mail/mail.service';
import { UserRapository } from '../user-rapository/user-rapository';

@Controller('/api/user')
export class UserController {
    constructor(
        private service: UserService,
        private connection: Connection,
        private mailService: MailService,
        private userRepository: UserRapository,
        @Inject('EmailService') private emailService: MailService
    ) { }

    @Post()
    post(): String {
        return 'POST'
    }

    @Get('/hello')
    async sayHello(@Query("name") name: string) {
        return this.service.sayHello(name)
    }
    @Get('/connection')
    async getConnection(): Promise<string> {
        this.mailService.send()
        this.userRepository.save()
        this.emailService.send()
        return this.connection.getName()
    }

    @Get('/set-cookie')
    setCookie(@Query('name') name: string, @Res() response: Response) {
        response.cookie('name', name)
        response.status(200).json({
            message: "set cookie success"
        })
    }
    @Get('/get-cookie')
    getCookie(@Res() response: Response, @Req() request: Request) {
        response.json({
            cookie: request.cookies['name']
        })
    }

    @Get('/all')
    @Header("content-type", "application/json")
    @HttpCode(200)
    all() {
        try {
            return {
                data: "asdasdasdas"
            }
        } catch (error) {

        }
    }
}
