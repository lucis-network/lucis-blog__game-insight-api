import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GameStatisticsCountAggregate } from './game-statistics-count-aggregate.output';
import { GameStatisticsAvgAggregate } from './game-statistics-avg-aggregate.output';
import { GameStatisticsSumAggregate } from './game-statistics-sum-aggregate.output';
import { GameStatisticsMinAggregate } from './game-statistics-min-aggregate.output';
import { GameStatisticsMaxAggregate } from './game-statistics-max-aggregate.output';

@ObjectType()
export class AggregateGameStatistics {

    @Field(() => GameStatisticsCountAggregate, {nullable:true})
    _count?: GameStatisticsCountAggregate;

    @Field(() => GameStatisticsAvgAggregate, {nullable:true})
    _avg?: GameStatisticsAvgAggregate;

    @Field(() => GameStatisticsSumAggregate, {nullable:true})
    _sum?: GameStatisticsSumAggregate;

    @Field(() => GameStatisticsMinAggregate, {nullable:true})
    _min?: GameStatisticsMinAggregate;

    @Field(() => GameStatisticsMaxAggregate, {nullable:true})
    _max?: GameStatisticsMaxAggregate;
}
