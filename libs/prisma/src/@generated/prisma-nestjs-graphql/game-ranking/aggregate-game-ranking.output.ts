import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GameRankingCountAggregate } from './game-ranking-count-aggregate.output';
import { GameRankingAvgAggregate } from './game-ranking-avg-aggregate.output';
import { GameRankingSumAggregate } from './game-ranking-sum-aggregate.output';
import { GameRankingMinAggregate } from './game-ranking-min-aggregate.output';
import { GameRankingMaxAggregate } from './game-ranking-max-aggregate.output';

@ObjectType()
export class AggregateGameRanking {

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
