import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class GameStatisticsMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    game_uid?: string;

    @Field(() => String, {nullable:true})
    currency_uid?: string;

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

    @Field(() => GraphQLDecimal, {nullable:true})
    maket_cap?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    fully_diluted_market_cap?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    circulation_supply?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    total_supply?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    maximum_sypply?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    ido?: any;

    @Field(() => Int, {nullable:true})
    no_tokens?: number;

    @Field(() => Date, {nullable:true})
    ido_time?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
