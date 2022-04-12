import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class GameRankingMaxAggregate {

    @Field(() => String, {nullable:true})
    game_uid?: string;

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

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
