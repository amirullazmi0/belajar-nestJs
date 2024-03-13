import { Controller, Get, Header, HttpCode, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from "express";
import { json } from 'stream/consumers';

@Controller('/api/user')
export class UserController {
    @Post()
    post(): String {
        return 'POST'
    }

    @Get('/hello')
    async sayHello(@Query("name") name: string, @Query("age") age: number,) {
        try {
            return `Hello ${name}, umur anda ${age}`
        } catch (error) {

        }
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
