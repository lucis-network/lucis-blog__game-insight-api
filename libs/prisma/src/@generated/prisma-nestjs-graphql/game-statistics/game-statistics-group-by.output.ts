import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { GameStatisticsCountAggregate } from './game-statistics-count-aggregate.output';
import { GameStatisticsAvgAggregate } from './game-statistics-avg-aggregate.output';
import { GameStatisticsSumAggregate } from './game-statistics-sum-aggregate.output';
import { GameStatisticsMinAggregate } from './game-statistics-min-aggregate.output';
import { GameStatisticsMaxAggregate } from './game-statistics-max-aggregate.output';

@ObjectType()
export class GameStatisticsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    game_uid!: string;

    @Field(() => String, {nullable:false})
    currency_uid!: string;

    @Field(() => Boolean, {nullable:false})
    is_use!: boolean;

    @Field(() => Float, {nullable:true})
    token_price?: number;

    @Field(() => Float, {nullable:true})
    highest_price?: number;

    @Field(() => Float, {nullable:true})
    highest_yield?: number;

    @Field(() => Float, {nullable:true})
    one_day_up?: number;

    @Field(() => Float, {nullable:true})
    one_day_trading_volum?: number;

    @Field(() => Float, {nullable:true})
    maket_cap?: number;

    @Field(() => Float, {nullable:true})
    fully_diluted_market_cap?: number;

    @Field(() => Int, {nullable:true})
    circulation_supply?: number;

    @Field(() => Int, {nullable:true})
    total_supply?: number;

    @Field(() => Int, {nullable:true})
    maximum_sypply?: number;

    @Field(() => GraphQLJSON, {nullable:true})
    price_fluctuating?: any;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

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
