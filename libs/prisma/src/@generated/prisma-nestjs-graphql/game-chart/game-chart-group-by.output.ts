import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GameChartType } from '../prisma/game-chart-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { GameChartCountAggregate } from './game-chart-count-aggregate.output';
import { GameChartMinAggregate } from './game-chart-min-aggregate.output';
import { GameChartMaxAggregate } from './game-chart-max-aggregate.output';

@ObjectType()
export class GameChartGroupBy {

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => GameChartType, {nullable:false})
    type!: keyof typeof GameChartType;

    @Field(() => String, {nullable:false})
    game_uid!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    series?: any;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => GameChartCountAggregate, {nullable:true})
    _count?: GameChartCountAggregate;

    @Field(() => GameChartMinAggregate, {nullable:true})
    _min?: GameChartMinAggregate;

    @Field(() => GameChartMaxAggregate, {nullable:true})
    _max?: GameChartMaxAggregate;
}
