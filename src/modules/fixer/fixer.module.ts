import { Module, forwardRef, HttpModule } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { FixerController } from './fixer.controller';
import { ConfigService } from '../../shared/services/config.service';
import { SharedModule } from '../../shared/shared.module';

@Module({
    imports: [HttpModule, SharedModule],
    controllers: [FixerController],
    providers: [FixerService, ConfigService],
    // exports: [ConfigService],
})
export class FixerModule {}
