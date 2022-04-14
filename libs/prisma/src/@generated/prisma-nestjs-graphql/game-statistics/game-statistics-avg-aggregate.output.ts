import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

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

    @Field(() => Float, {nullable:true})
    no_tokens?: number;
}
