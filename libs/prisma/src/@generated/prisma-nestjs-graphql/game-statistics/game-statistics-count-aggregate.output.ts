import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GameStatisticsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    game_uid!: number;

    @Field(() => Int, {nullable:false})
    currency_uid!: number;

    @Field(() => Int, {nullable:false})
    is_use!: number;

    @Field(() => Int, {nullable:false})
    token_price!: number;

    @Field(() => Int, {nullable:false})
    highest_price!: number;

    @Field(() => Int, {nullable:false})
    highest_yield!: number;

    @Field(() => Int, {nullable:false})
    one_day_up!: number;

    @Field(() => Int, {nullable:false})
    one_day_trading_volum!: number;

    @Field(() => Int, {nullable:false})
    maket_cap!: number;

    @Field(() => Int, {nullable:false})
    fully_diluted_market_cap!: number;

    @Field(() => Int, {nullable:false})
    circulation_supply!: number;

    @Field(() => Int, {nullable:false})
    total_supply!: number;

    @Field(() => Int, {nullable:false})
    maximum_sypply!: number;

    @Field(() => Int, {nullable:false})
    price_fluctuating!: number;

    @Field(() => Int, {nullable:false})
    ido!: number;

    @Field(() => Int, {nullable:false})
    no_tokens!: number;

    @Field(() => Int, {nullable:false})
    ido_time!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
