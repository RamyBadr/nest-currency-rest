import { FixerController } from './fixer.controller';
import { FixerService } from './fixer.service';
import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '../../shared/services/config.service';
import { LatestOptionsDto } from './dto/currency-page-options.dto';
describe('FixerController', () => {
    let fixerController: FixerController;
    let fixerService: FixerService;

    beforeEach(() => {
        fixerService = new FixerService(new HttpService(), new ConfigService());
        fixerController = new FixerController(fixerService);
    });

    describe('getLatest with same base symbol (EUR)', () => {
        it(`should return response having properties:
        {
          success: true,
          base: 'EUR',
          rates: {
              EUR: 1,
          },
        }
        `, async () => {
            const options = new LatestOptionsDto();
            options.base = 'EUR';
            options.symbols = 'EUR';

            expect(await fixerController.getLatest(options)).toMatchObject({
                success: true,
                base: 'EUR',
                rates: {
                    EUR: 1,
                },
            });
        });
    });
});
