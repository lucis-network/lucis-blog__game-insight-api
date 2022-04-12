import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class GameStatisticsUncheckedCreateWithoutCurrencyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    game_uid!: string;

    @Field(() => Boolean, {nullable:true})
    is_use?: boolean;

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

    @Field(() => Int, {nullable:true})
    circulation_supply?: number;

    @Field(() => Int, {nullable:true})
    total_supply?: number;

    @Field(() => Int, {nullable:true})
    maximum_sypply?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    price_fluctuating?: any;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
