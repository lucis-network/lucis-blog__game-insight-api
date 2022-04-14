import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameOrderByWithRelationAndSearchRelevanceInput } from '../game/game-order-by-with-relation-and-search-relevance.input';
import { GameRankingOrderByRelevanceInput } from './game-ranking-order-by-relevance.input';

@InputType()
export class GameRankingOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => GameOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    game?: GameOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => GameRankingOrderByRelevanceInput, {nullable:true})
    _relevance?: GameRankingOrderByRelevanceInput;
}
