'use strict';

import { HttpCode, HttpStatus, ValidationPipe } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiResponse,
    ApiUseTags,
    ApiOkResponse,
    ApiModelProperty,
} from '@nestjs/swagger';

import {
    CurrencyRateResponse,
    TestType,
    // CurrencyRate,
} from './models/currencyRate.model';
import { LatestOptionsArgs } from './dto/currencyRate.args';
import { FixerService } from './fixer.service';

import { Any } from 'typeorm';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

@Resolver()
export class RatesResolver {
    constructor(private readonly fixerService: FixerService) {}
    @Query(() => TestType)
    async getLatest(): Promise<TestType> {
        const result = await this.fixerService.getLatest();
        console.log(result);
        return {
            // success: true,
            // timestamp: 1,
            // base: 'USD',
            test: 'test',
        };
    }
    @Query(() => String)
    hello() {
        return 'hello graphql';
    }
}
