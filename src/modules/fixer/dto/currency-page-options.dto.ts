import { PageOptionsDto } from '../../../common/dto/PageOptionsDto';
import {
    IsString,
    IsOptional,
    IsIn,
    IsUUID,
    IsBoolean,
    IsBooleanString,
    IsNotEmpty,
    IsArray,
    IsNumber,
    IsPositive,
    IsNumberString,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LatestOptionsDto {
    @IsString({ each: true })
    @ApiModelProperty({ required: false, type: String, default: 'USD,CAD,JPY' })
    symbols: string;

    @IsString()
    @ApiModelProperty({ required: false, type: String, default: 'EUR' })
    base: string;
}
export class ConvertOptionsDto {
    @IsString({ each: true })
    @ApiModelProperty({ required: true, type: String, default: 'EUR' })
    from: string;

    @IsString()
    @ApiModelProperty({ required: true, type: String, default: 'USD' })
    to: string;
    @IsNumberString()
    @ApiModelProperty({ required: true, type: String, default: '0' })
    amount: string;
}
