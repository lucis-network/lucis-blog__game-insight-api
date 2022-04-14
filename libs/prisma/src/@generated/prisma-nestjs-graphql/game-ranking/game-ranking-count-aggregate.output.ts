import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GameRankingCountAggregate {

    @Field(() => Int, {nullable:false})
    game_uid!: number;

    @Field(() => Int, {nullable:false})
    rank!: number;

    @Field(() => Int, {nullable:false})
    users!: number;

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => Int, {nullable:false})
    volume!: number;

    @Field(() => Int, {nullable:false})
    market_cap!: number;

    @Field(() => Int, {nullable:false})
    tvl_change!: number;

    @Field(() => Int, {nullable:false})
    mcap_tvl!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
