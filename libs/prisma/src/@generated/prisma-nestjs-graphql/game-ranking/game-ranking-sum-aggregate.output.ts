import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class GameRankingSumAggregate {

    @Field(() => Float, {nullable:true})
    rank?: number;

    @Field(() => Float, {nullable:true})
    users?: number;

    @Field(() => Float, {nullable:true})
    change?: number;

    @Field(() => Float, {nullable:true})
    volume?: number;

    @Field(() => Float, {nullable:true})
    market_cap?: number;

    @Field(() => Float, {nullable:true})
    tvl_change?: number;

    @Field(() => Float, {nullable:true})
    mcap_tvl?: number;
}
