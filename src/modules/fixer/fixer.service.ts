import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigService } from '../../shared/services/config.service';
import {
    LatestOptionsDto,
    ConvertOptionsDto,
} from './dto/currency-page-options.dto';
@Injectable()
export class FixerService {
    constructor(
        private httpService: HttpService,
        public readonly configService: ConfigService,
    ) {}

    async getLatest(params?: LatestOptionsDto): Promise<any> {
        return this.httpService
            .get(this.configService.fixerBaseUrl + '/latest', {
                params: {
                    access_key: this.configService.fixerApiKey,
                    ...params,
                },
            })
            .toPromise();
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
