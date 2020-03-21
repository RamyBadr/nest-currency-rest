import './boilerplate.polyfill';

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { contextMiddleware } from './middlewares';
import { AuthModule } from './modules/auth/auth.module';
import { MathModule } from './modules/math/math.module';
import { UserModule } from './modules/user/user.module';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';
import { FixerModule } from './modules/fixer/fixer.module';
import { FixerGraphModule } from './modules/fixerGraph/fixer.graph.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
        SharedModule,
        FixerModule,
        // FixerGraphModule,
        // GraphQLModule.forRootAsync({
        //     useFactory: () => ({
        //         autoSchemaFile: 'schema.gql',
        //         include: [FixerGraphModule],
        //     }),
        // }),

        // MathModule,
        // AuthModule,
        // UserModule,
        // TypeOrmModule.forRootAsync({
        //     imports: [SharedModule],
        //     useFactory: (configService: ConfigService) =>
        //         configService.typeOrmConfig,
        //     inject: [ConfigService],
        // }),
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(contextMiddleware).forRoutes('*');
    }
}
