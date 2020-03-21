import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class LatestOptionsArgs {
    @Field(type => String)
    symbols?: string = 'USD,CAD,JPY';

    @Field(type => String)
    base?: string = 'EUR';
}
