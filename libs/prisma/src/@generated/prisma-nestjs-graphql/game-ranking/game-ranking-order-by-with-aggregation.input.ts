import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameRankingCountOrderByAggregateInput } from './game-ranking-count-order-by-aggregate.input';
import { GameRankingAvgOrderByAggregateInput } from './game-ranking-avg-order-by-aggregate.input';
import { GameRankingMaxOrderByAggregateInput } from './game-ranking-max-order-by-aggregate.input';
import { GameRankingMinOrderByAggregateInput } from './game-ranking-min-order-by-aggregate.input';
import { GameRankingSumOrderByAggregateInput } from './game-ranking-sum-order-by-aggregate.input';

@InputType()
export class GameRankingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    game_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rank?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    users?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    change?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    volume?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    market_cap?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tvl_change?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mcap_tvl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => GameRankingCountOrderByAggregateInput, {nullable:true})
    _count?: GameRankingCountOrderByAggregateInput;

    @Field(() => GameRankingAvgOrderByAggregateInput, {nullable:true})
    _avg?: GameRankingAvgOrderByAggregateInput;

    @Field(() => GameRankingMaxOrderByAggregateInput, {nullable:true})
    _max?: GameRankingMaxOrderByAggregateInput;

    @Field(() => GameRankingMinOrderByAggregateInput, {nullable:true})
    _min?: GameRankingMinOrderByAggregateInput;

    @Field(() => GameRankingSumOrderByAggregateInput, {nullable:true})
    _sum?: GameRankingSumOrderByAggregateInput;
}
