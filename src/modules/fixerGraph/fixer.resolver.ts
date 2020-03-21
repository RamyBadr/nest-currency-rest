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
    CurrencyRate,
} from './models/currencyRate.model';
import { LatestOptionsArgs } from './dto/currencyRate.args';
import { FixerService } from './fixer.service';

import { Any } from 'typeorm';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

@Resolver(of => CurrencyRateResponse)
export class RatesResolver {
    constructor(private readonly fixerService: FixerService) {}
    @Query(returns => CurrencyRateResponse)
    async getLatest(
        @Args() latestOptionsArgs: LatestOptionsArgs,
    ): Promise<CurrencyRateResponse> {
        return await this.fixerService.getLatest(latestOptionsArgs);
    }
}
