import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class GameRankingAvgAggregate {

    @Field(() => Float, {nullable:true})
    rank?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    users?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    change?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    volume?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    market_cap?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    tvl_change?: any;

    @Field(() => GraphQLDecimal, {nullable:true})
    mcap_tvl?: any;
}
