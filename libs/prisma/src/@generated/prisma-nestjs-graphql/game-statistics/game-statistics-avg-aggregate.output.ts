import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class GameStatisticsAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    token_price?: number;

    @Field(() => Float, {nullable:true})
    highest_price?: number;

    @Field(() => Float, {nullable:true})
    highest_yield?: number;

    @Field(() => Float, {nullable:true})
    one_day_up?: number;

    @Field(() => Float, {nullable:true})
    one_day_trading_volum?: number;

    @Field(() => Float, {nullable:true})
    maket_cap?: number;

    @Field(() => Float, {nullable:true})
    fully_diluted_market_cap?: number;

    @Field(() => Float, {nullable:true})
    circulation_supply?: number;

    @Field(() => Float, {nullable:true})
    total_supply?: number;

    @Field(() => Float, {nullable:true})
    maximum_sypply?: number;
}
