import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { GameRankingCountAggregate } from './game-ranking-count-aggregate.output';
import { GameRankingAvgAggregate } from './game-ranking-avg-aggregate.output';
import { GameRankingSumAggregate } from './game-ranking-sum-aggregate.output';
import { GameRankingMinAggregate } from './game-ranking-min-aggregate.output';
import { GameRankingMaxAggregate } from './game-ranking-max-aggregate.output';

@ObjectType()
export class GameRankingGroupBy {

    @Field(() => String, {nullable:false})
    game_uid!: string;

    @Field(() => Int, {nullable:true})
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
