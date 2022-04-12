import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameChartCountOrderByAggregateInput } from './game-chart-count-order-by-aggregate.input';
import { GameChartMaxOrderByAggregateInput } from './game-chart-max-order-by-aggregate.input';
import { GameChartMinOrderByAggregateInput } from './game-chart-min-order-by-aggregate.input';

@InputType()
export class GameChartOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => GameChartCountOrderByAggregateInput, {nullable:true})
    _count?: GameChartCountOrderByAggregateInput;

    @Field(() => GameChartMaxOrderByAggregateInput, {nullable:true})
    _max?: GameChartMaxOrderByAggregateInput;

    @Field(() => GameChartMinOrderByAggregateInput, {nullable:true})
    _min?: GameChartMinOrderByAggregateInput;
}
