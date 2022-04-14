import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GameChartCountAggregate } from './game-chart-count-aggregate.output';
import { GameChartMinAggregate } from './game-chart-min-aggregate.output';
import { GameChartMaxAggregate } from './game-chart-max-aggregate.output';

@ObjectType()
export class AggregateGameChart {

    @Field(() => GameChartCountAggregate, {nullable:true})
    _count?: GameChartCountAggregate;

    @Field(() => GameChartMinAggregate, {nullable:true})
    _min?: GameChartMinAggregate;

    @Field(() => GameChartMaxAggregate, {nullable:true})
    _max?: GameChartMaxAggregate;
}
