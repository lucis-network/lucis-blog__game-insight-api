import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRankingWhereInput } from './game-ranking-where.input';
import { GameRankingOrderByWithAggregationInput } from './game-ranking-order-by-with-aggregation.input';
import { GameRankingScalarFieldEnum } from './game-ranking-scalar-field.enum';
import { GameRankingScalarWhereWithAggregatesInput } from './game-ranking-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GameRankingCountAggregateInput } from './game-ranking-count-aggregate.input';
import { GameRankingAvgAggregateInput } from './game-ranking-avg-aggregate.input';
import { GameRankingSumAggregateInput } from './game-ranking-sum-aggregate.input';
import { GameRankingMinAggregateInput } from './game-ranking-min-aggregate.input';
import { GameRankingMaxAggregateInput } from './game-ranking-max-aggregate.input';

@ArgsType()
export class GameRankingGroupByArgs {

    @Field(() => GameRankingWhereInput, {nullable:true})
    where?: GameRankingWhereInput;

    @Field(() => [GameRankingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GameRankingOrderByWithAggregationInput>;

    @Field(() => [GameRankingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GameRankingScalarFieldEnum>;

    @Field(() => GameRankingScalarWhereWithAggregatesInput, {nullable:true})
    having?: GameRankingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GameRankingCountAggregateInput, {nullable:true})
    _count?: GameRankingCountAggregateInput;

    @Field(() => GameRankingAvgAggregateInput, {nullable:true})
    _avg?: GameRankingAvgAggregateInput;

    @Field(() => GameRankingSumAggregateInput, {nullable:true})
    _sum?: GameRankingSumAggregateInput;

    @Field(() => GameRankingMinAggregateInput, {nullable:true})
    _min?: GameRankingMinAggregateInput;

    @Field(() => GameRankingMaxAggregateInput, {nullable:true})
    _max?: GameRankingMaxAggregateInput;
}
