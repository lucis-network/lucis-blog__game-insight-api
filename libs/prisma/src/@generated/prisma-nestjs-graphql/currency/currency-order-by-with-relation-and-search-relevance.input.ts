import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChainOrderByWithRelationAndSearchRelevanceInput } from '../chain/chain-order-by-with-relation-and-search-relevance.input';
import { GameStatisticsOrderByRelationAggregateInput } from '../game-statistics/game-statistics-order-by-relation-aggregate.input';
import { CurrencyOrderByRelevanceInput } from './currency-order-by-relevance.input';

@InputType()
export class CurrencyOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    symbol?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chain_symbol?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;

    @Field(() => ChainOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    chain?: ChainOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => GameStatisticsOrderByRelationAggregateInput, {nullable:true})
    game_statistic?: GameStatisticsOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => CurrencyOrderByRelevanceInput, {nullable:true})
    _relevance?: CurrencyOrderByRelevanceInput;
}
