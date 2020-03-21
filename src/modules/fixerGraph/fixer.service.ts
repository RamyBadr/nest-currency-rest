import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigService } from '../../shared/services/config.service';
import { LatestOptionsArgs } from './dto/currencyRate.args';
import { CurrencyRateResponse } from './models/currencyRate.model';
@Injectable()
export class FixerService {
    constructor(
        private httpService: HttpService,
        public readonly configService: ConfigService,
    ) {}

    async getLatest(params?: LatestOptionsArgs): Promise<CurrencyRateResponse> {
        let result = await this.httpService
            .get(this.configService.fixerBaseUrl + '/latest', {
                params: {
                    access_key: this.configService.fixerApiKey,
                    ...params,
                },
            })
            .toPromise<AxiosResponse<CurrencyRateResponse>>();
        return result.data as CurrencyRateResponse;
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
