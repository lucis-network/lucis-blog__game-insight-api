import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameInsightWhereInput } from './game-insight-where.input';
import { GameInsightOrderByWithAggregationInput } from './game-insight-order-by-with-aggregation.input';
import { GameInsightScalarFieldEnum } from './game-insight-scalar-field.enum';
import { GameInsightScalarWhereWithAggregatesInput } from './game-insight-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GameInsightCountAggregateInput } from './game-insight-count-aggregate.input';
import { GameInsightAvgAggregateInput } from './game-insight-avg-aggregate.input';
import { GameInsightSumAggregateInput } from './game-insight-sum-aggregate.input';
import { GameInsightMinAggregateInput } from './game-insight-min-aggregate.input';
import { GameInsightMaxAggregateInput } from './game-insight-max-aggregate.input';

@ArgsType()
export class GameInsightGroupByArgs {

    @Field(() => GameInsightWhereInput, {nullable:true})
    where?: GameInsightWhereInput;

    @Field(() => [GameInsightOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GameInsightOrderByWithAggregationInput>;

    @Field(() => [GameInsightScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GameInsightScalarFieldEnum>;

    @Field(() => GameInsightScalarWhereWithAggregatesInput, {nullable:true})
    having?: GameInsightScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GameInsightCountAggregateInput, {nullable:true})
    _count?: GameInsightCountAggregateInput;

    @Field(() => GameInsightAvgAggregateInput, {nullable:true})
    _avg?: GameInsightAvgAggregateInput;

    @Field(() => GameInsightSumAggregateInput, {nullable:true})
    _sum?: GameInsightSumAggregateInput;

    @Field(() => GameInsightMinAggregateInput, {nullable:true})
    _min?: GameInsightMinAggregateInput;

    @Field(() => GameInsightMaxAggregateInput, {nullable:true})
    _max?: GameInsightMaxAggregateInput;
}
