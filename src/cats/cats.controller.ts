import { Logger, Controller, Get, Post, Param, Body } from '@nestjs/common';
import { get } from 'https';
import { create } from 'domain';
import { CatDto } from './cat';

@Controller('cats')
export class CatsController {

    @Post()
    create(@Body() catDto: CatDto) {
        Logger.log(catDto);
        return catDto;
    }
    @Get(':id')
    findOne(@Param() params) {
        Logger.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Get()
    findAll() {
        //TODO not finished
        return 'This will return all cats';
    }
}
