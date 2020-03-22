import './boilerplate.polyfill';

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { contextMiddleware } from './middlewares';
import { SharedModule } from './shared/shared.module';
import { FixerModule } from './modules/fixer/fixer.module';

@Module({
    imports: [SharedModule, FixerModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(contextMiddleware).forRoutes('*');
    }
}
