import { Module, forwardRef, HttpModule } from '@nestjs/common';

import { DateScalar } from '../../common/scalars/date.scalar';
import { RatesResolver } from './fixer.resolver';
import { FixerService } from './fixer.service';

@Module({
    imports: [HttpModule],
    providers: [RatesResolver, FixerService],
})
export class FixerGraphModule {}
