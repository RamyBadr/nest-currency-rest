'use strict';

import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Query,
    UseGuards,
    UseInterceptors,
    ValidationPipe,
    Post,
    Body,
    Patch,
    Param,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiResponse,
    ApiUseTags,
    ApiOkResponse,
    ApiModelProperty,
} from '@nestjs/swagger';

import { FixerService } from './fixer.service';
import { Any } from 'typeorm';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { UsersPageOptionsDto } from '../user/dto/users-page-options.dto';
import {
    LatestOptionsDto,
    ConvertOptionsDto,
} from './dto/currency-page-options.dto';

@Controller('fixer')
@ApiUseTags('fixer')
// @UseGuards(AuthGuard, RolesGuard)
// @UseInterceptors(AuthUserInterceptor)
// @ApiBearerAuth()
export class FixerController {
    constructor(private readonly fixerService: FixerService) {}

    @Get('symbols')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get Symbols endpoint',
        type: Any,
    })
    async getSymbols(): Promise<any> {
        const result = await this.fixerService.getSymbols();
        // console.log(result, 'GET Symbols response');
        return result.data;
    }

    @Get('latest')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Get latest rates endpoint',
        type: Any,
    })
    async getLatest(
        @Query(new ValidationPipe({ transform: true }))
        pageOptionsDto: LatestOptionsDto,
    ): Promise<any> {
        const result = await this.fixerService.getLatest(pageOptionsDto);
        return result.data;
    }
    @Get('convert')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Convert endpoint, This is premium feature',
        type: Any,
    })
    async convert(
        @Query(new ValidationPipe({ transform: true }))
        pageOptionsDto: ConvertOptionsDto,
    ): Promise<any> {
        const result = await this.fixerService.convert(pageOptionsDto);
        return result.data;
    }
}
