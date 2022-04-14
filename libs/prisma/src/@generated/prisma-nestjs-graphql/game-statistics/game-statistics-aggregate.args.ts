import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameStatisticsWhereInput } from './game-statistics-where.input';
import { GameStatisticsOrderByWithRelationAndSearchRelevanceInput } from './game-statistics-order-by-with-relation-and-search-relevance.input';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameStatisticsCountAggregateInput } from './game-statistics-count-aggregate.input';
import { GameStatisticsAvgAggregateInput } from './game-statistics-avg-aggregate.input';
import { GameStatisticsSumAggregateInput } from './game-statistics-sum-aggregate.input';
import { GameStatisticsMinAggregateInput } from './game-statistics-min-aggregate.input';
import { GameStatisticsMaxAggregateInput } from './game-statistics-max-aggregate.input';

@ArgsType()
export class GameStatisticsAggregateArgs {

    @Field(() => GameStatisticsWhereInput, {nullable:true})
    where?: GameStatisticsWhereInput;

    @Field(() => [GameStatisticsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameStatisticsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:true})
    cursor?: GameStatisticsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GameStatisticsCountAggregateInput, {nullable:true})
    _count?: GameStatisticsCountAggregateInput;

    @Field(() => GameStatisticsAvgAggregateInput, {nullable:true})
    _avg?: GameStatisticsAvgAggregateInput;

    @Field(() => GameStatisticsSumAggregateInput, {nullable:true})
    _sum?: GameStatisticsSumAggregateInput;

    @Field(() => GameStatisticsMinAggregateInput, {nullable:true})
    _min?: GameStatisticsMinAggregateInput;

    @Field(() => GameStatisticsMaxAggregateInput, {nullable:true})
    _max?: GameStatisticsMaxAggregateInput;
}
