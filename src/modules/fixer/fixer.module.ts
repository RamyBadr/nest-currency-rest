import { Module, forwardRef, HttpModule } from '@nestjs/common';
import { FixerService } from './fixer.service';
import { FixerController } from './fixer.controller';

@Module({
    imports: [HttpModule],
    controllers: [FixerController],
    providers: [FixerService],
})
export class FixerModule {}
