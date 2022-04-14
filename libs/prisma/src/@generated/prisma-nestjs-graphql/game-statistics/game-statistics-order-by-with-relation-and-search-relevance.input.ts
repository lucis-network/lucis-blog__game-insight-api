import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameOrderByWithRelationAndSearchRelevanceInput } from '../game/game-order-by-with-relation-and-search-relevance.input';
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from '../currency/currency-order-by-with-relation-and-search-relevance.input';
import { GameStatisticsOrderByRelevanceInput } from './game-statistics-order-by-relevance.input';

@InputType()
export class GameStatisticsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_use?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    highest_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    highest_yield?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    one_day_up?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    one_day_trading_volum?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maket_cap?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fully_diluted_market_cap?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    circulation_supply?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_supply?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maximum_sypply?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_fluctuating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ido?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    no_tokens?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ido_time?: keyof typeof SortOrder;

    @Field(() => GameOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    game?: GameOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => CurrencyOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    currency?: CurrencyOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => GameStatisticsOrderByRelevanceInput, {nullable:true})
    _relevance?: GameStatisticsOrderByRelevanceInput;
}
