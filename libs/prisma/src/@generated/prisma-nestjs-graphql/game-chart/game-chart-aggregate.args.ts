import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameChartWhereInput } from './game-chart-where.input';
import { GameChartOrderByWithRelationAndSearchRelevanceInput } from './game-chart-order-by-with-relation-and-search-relevance.input';
import { GameChartWhereUniqueInput } from './game-chart-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameChartCountAggregateInput } from './game-chart-count-aggregate.input';
import { GameChartMinAggregateInput } from './game-chart-min-aggregate.input';
import { GameChartMaxAggregateInput } from './game-chart-max-aggregate.input';

@ArgsType()
export class GameChartAggregateArgs {

    @Field(() => GameChartWhereInput, {nullable:true})
    where?: GameChartWhereInput;

    @Field(() => [GameChartOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameChartOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameChartWhereUniqueInput, {nullable:true})
    cursor?: GameChartWhereUniqueInput;

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
