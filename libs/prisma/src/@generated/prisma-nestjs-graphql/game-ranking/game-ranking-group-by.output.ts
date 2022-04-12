import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GameRankingCountAggregate } from './game-ranking-count-aggregate.output';
import { GameRankingAvgAggregate } from './game-ranking-avg-aggregate.output';
import { GameRankingSumAggregate } from './game-ranking-sum-aggregate.output';
import { GameRankingMinAggregate } from './game-ranking-min-aggregate.output';
import { GameRankingMaxAggregate } from './game-ranking-max-aggregate.output';

@ObjectType()
export class GameRankingGroupBy {

    @Field(() => String, {nullable:false})
    game_uid!: string;

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

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => GameRankingCountAggregate, {nullable:true})
    _count?: GameRankingCountAggregate;

    @Field(() => GameRankingAvgAggregate, {nullable:true})
    _avg?: GameRankingAvgAggregate;

    @Field(() => GameRankingSumAggregate, {nullable:true})
    _sum?: GameRankingSumAggregate;

    @Field(() => GameRankingMinAggregate, {nullable:true})
    _min?: GameRankingMinAggregate;

    @Field(() => GameRankingMaxAggregate, {nullable:true})
    _max?: GameRankingMaxAggregate;
}
