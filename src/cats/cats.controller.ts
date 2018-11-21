import { Logger, Controller, Get, Post, Param, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { CatDto } from './cat';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() catDto: CatDto) {
        Logger.log(catDto);
        this.catsService.isValid(catDto);

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
