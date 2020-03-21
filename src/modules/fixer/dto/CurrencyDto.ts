'use strict';

import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/AbstractDto';
export class CurrencyDto {
    @ApiModelProperty()
    text: string;

    @ApiModelProperty({ default: false })
    ispublished: boolean;

    constructor() {}
}
