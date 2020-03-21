import { CurrencyDto } from './CurrencyDto';
import { ApiModelProperty } from '@nestjs/swagger';
import { PageMetaDto } from '../../../common/dto/PageMetaDto';

export class QuestionsPageDto {
    @ApiModelProperty({
        type: CurrencyDto,
        isArray: true,
    })
    readonly data: CurrencyDto[];

    @ApiModelProperty()
    readonly meta: PageMetaDto;

    constructor(data: CurrencyDto[], meta: PageMetaDto) {
        this.data = data;
        this.meta = meta;
    }
}
