import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameChartWhereInput } from './game-chart-where.input';
import { GameChartOrderByWithAggregationInput } from './game-chart-order-by-with-aggregation.input';
import { GameChartScalarFieldEnum } from './game-chart-scalar-field.enum';
import { GameChartScalarWhereWithAggregatesInput } from './game-chart-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GameChartCountAggregateInput } from './game-chart-count-aggregate.input';
import { GameChartMinAggregateInput } from './game-chart-min-aggregate.input';
import { GameChartMaxAggregateInput } from './game-chart-max-aggregate.input';

@ArgsType()
export class GameChartGroupByArgs {

    @Field(() => GameChartWhereInput, {nullable:true})
    where?: GameChartWhereInput;

    @Field(() => [GameChartOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GameChartOrderByWithAggregationInput>;

    @Field(() => [GameChartScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GameChartScalarFieldEnum>;

    @Field(() => GameChartScalarWhereWithAggregatesInput, {nullable:true})
    having?: GameChartScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GameChartCountAggregateInput, {nullable:true})
    _count?: GameChartCountAggregateInput;

    @Field(() => GameChartMinAggregateInput, {nullable:true})
    _min?: GameChartMinAggregateInput;

    @Field(() => GameChartMaxAggregateInput, {nullable:true})
    _max?: GameChartMaxAggregateInput;
}
