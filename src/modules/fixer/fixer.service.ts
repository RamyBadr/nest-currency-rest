import {
    Injectable,
    HttpService,
    NotFoundException,
    BadGatewayException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigService } from '../../shared/services/config.service';
import {
    LatestOptionsDto,
    ConvertOptionsDto,
} from './dto/currency-page-options.dto';
import { ExternalExceptionFilter } from '@nestjs/core/exceptions/external-exception-filter';
@Injectable()
export class FixerService {
    constructor(
        private httpService: HttpService,
        public readonly configService: ConfigService,
    ) {}

    async getLatest(params?: LatestOptionsDto): Promise<any> {
        try {
            const result = await this.httpService
                .get(this.configService.fixerBaseUrl + '/latest', {
                    params: {
                        access_key: this.configService.fixerApiKey,
                        ...params,
                    },
                })
                .toPromise();
            return result;
        } catch (error) {
            console.log(error, 'connect error');
            throw new BadGatewayException(
                'api connection faild',
                // 'error.api.notfound',
            );
        }
    }
    async convert(params?: ConvertOptionsDto): Promise<any> {
        return this.httpService
            .get(this.configService.fixerBaseUrl + '/convert', {
                params: {
                    access_key: this.configService.fixerApiKey,
                    ...params,
                },
            })
            .toPromise();
    }
    async getSymbols(): Promise<any> {
        return this.httpService
            .get(this.configService.fixerBaseUrl + '/symbols', {
                params: {
                    access_key: this.configService.fixerApiKey,
                },
            })
            .toPromise();
    }
}
