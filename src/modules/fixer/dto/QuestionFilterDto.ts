'use strict';

import {
    IsString,
    IsEmail,
    MinLength,
    IsNotEmpty,
    IsPhoneNumber,
    IsOptional,
    IsIn,
    IsUUID,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { LatestOptionsDto } from './currency-page-options.dto';

export class QuestionFilterDto {
    readonly quizId: string;
    readonly ispublished: boolean;
    constructor(pageOptionsDto: LatestOptionsDto) {}
}
