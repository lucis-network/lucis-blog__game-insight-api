import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameStatisticsCountOrderByAggregateInput } from './game-statistics-count-order-by-aggregate.input';
import { GameStatisticsAvgOrderByAggregateInput } from './game-statistics-avg-order-by-aggregate.input';
import { GameStatisticsMaxOrderByAggregateInput } from './game-statistics-max-order-by-aggregate.input';
import { GameStatisticsMinOrderByAggregateInput } from './game-statistics-min-order-by-aggregate.input';
import { GameStatisticsSumOrderByAggregateInput } from './game-statistics-sum-order-by-aggregate.input';

@InputType()
export class GameStatisticsOrderByWithAggregationInput {

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

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => GameStatisticsCountOrderByAggregateInput, {nullable:true})
    _count?: GameStatisticsCountOrderByAggregateInput;

    @Field(() => GameStatisticsAvgOrderByAggregateInput, {nullable:true})
    _avg?: GameStatisticsAvgOrderByAggregateInput;

    @Field(() => GameStatisticsMaxOrderByAggregateInput, {nullable:true})
    _max?: GameStatisticsMaxOrderByAggregateInput;

    @Field(() => GameStatisticsMinOrderByAggregateInput, {nullable:true})
    _min?: GameStatisticsMinOrderByAggregateInput;

    @Field(() => GameStatisticsSumOrderByAggregateInput, {nullable:true})
    _sum?: GameStatisticsSumOrderByAggregateInput;
}
