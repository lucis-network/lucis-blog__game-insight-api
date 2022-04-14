import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GameInsightCountAggregate } from './game-insight-count-aggregate.output';
import { GameInsightAvgAggregate } from './game-insight-avg-aggregate.output';
import { GameInsightSumAggregate } from './game-insight-sum-aggregate.output';
import { GameInsightMinAggregate } from './game-insight-min-aggregate.output';
import { GameInsightMaxAggregate } from './game-insight-max-aggregate.output';

@ObjectType()
export class AggregateGameInsight {

    @Field(() => GameInsightCountAggregate, {nullable:true})
    _count?: GameInsightCountAggregate;

    @Field(() => GameInsightAvgAggregate, {nullable:true})
    _avg?: GameInsightAvgAggregate;

    @Field(() => GameInsightSumAggregate, {nullable:true})
    _sum?: GameInsightSumAggregate;

    @Field(() => GameInsightMinAggregate, {nullable:true})
    _min?: GameInsightMinAggregate;

    @Field(() => GameInsightMaxAggregate, {nullable:true})
    _max?: GameInsightMaxAggregate;
}
