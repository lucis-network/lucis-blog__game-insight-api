import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRankingWhereInput } from './game-ranking-where.input';
import { GameRankingOrderByWithRelationAndSearchRelevanceInput } from './game-ranking-order-by-with-relation-and-search-relevance.input';
import { GameRankingWhereUniqueInput } from './game-ranking-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameRankingCountAggregateInput } from './game-ranking-count-aggregate.input';
import { GameRankingAvgAggregateInput } from './game-ranking-avg-aggregate.input';
import { GameRankingSumAggregateInput } from './game-ranking-sum-aggregate.input';
import { GameRankingMinAggregateInput } from './game-ranking-min-aggregate.input';
import { GameRankingMaxAggregateInput } from './game-ranking-max-aggregate.input';

@ArgsType()
export class GameRankingAggregateArgs {

    @Field(() => GameRankingWhereInput, {nullable:true})
    where?: GameRankingWhereInput;

    @Field(() => [GameRankingOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameRankingOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameRankingWhereUniqueInput, {nullable:true})
    cursor?: GameRankingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GameRankingCountAggregateInput, {nullable:true})
    _count?: GameRankingCountAggregateInput;

    @Field(() => GameRankingAvgAggregateInput, {nullable:true})
    _avg?: GameRankingAvgAggregateInput;

    @Field(() => GameRankingSumAggregateInput, {nullable:true})
    _sum?: GameRankingSumAggregateInput;

    @Field(() => GameRankingMinAggregateInput, {nullable:true})
    _min?: GameRankingMinAggregateInput;

    @Field(() => GameRankingMaxAggregateInput, {nullable:true})
    _max?: GameRankingMaxAggregateInput;
}
