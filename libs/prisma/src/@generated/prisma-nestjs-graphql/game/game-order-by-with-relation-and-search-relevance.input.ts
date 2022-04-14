import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameChartOrderByRelationAggregateInput } from '../game-chart/game-chart-order-by-relation-aggregate.input';
import { GameRankingOrderByWithRelationAndSearchRelevanceInput } from '../game-ranking/game-ranking-order-by-with-relation-and-search-relevance.input';
import { GameInsightOrderByWithRelationAndSearchRelevanceInput } from '../game-insight/game-insight-order-by-with-relation-and-search-relevance.input';
import { GameStatisticsOrderByRelationAggregateInput } from '../game-statistics/game-statistics-order-by-relation-aggregate.input';
import { GameOrderByRelevanceInput } from './game-order-by-relevance.input';

@InputType()
export class GameOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    desc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    desc_team?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    whitepaper?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pitchdeck?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trailer_video?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    facebook?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twitter?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telegram?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    youtube?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discord?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    road_map?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_team?: keyof typeof SortOrder;

    @Field(() => GameChartOrderByRelationAggregateInput, {nullable:true})
    game_charts?: GameChartOrderByRelationAggregateInput;

    @Field(() => GameRankingOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    game_ranking?: GameRankingOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => GameInsightOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    game_insight?: GameInsightOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => GameStatisticsOrderByRelationAggregateInput, {nullable:true})
    game_statistics?: GameStatisticsOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => GameOrderByRelevanceInput, {nullable:true})
    _relevance?: GameOrderByRelevanceInput;
}
