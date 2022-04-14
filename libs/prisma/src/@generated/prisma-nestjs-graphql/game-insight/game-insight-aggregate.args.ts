import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameInsightWhereInput } from './game-insight-where.input';
import { GameInsightOrderByWithRelationAndSearchRelevanceInput } from './game-insight-order-by-with-relation-and-search-relevance.input';
import { GameInsightWhereUniqueInput } from './game-insight-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameInsightCountAggregateInput } from './game-insight-count-aggregate.input';
import { GameInsightAvgAggregateInput } from './game-insight-avg-aggregate.input';
import { GameInsightSumAggregateInput } from './game-insight-sum-aggregate.input';
import { GameInsightMinAggregateInput } from './game-insight-min-aggregate.input';
import { GameInsightMaxAggregateInput } from './game-insight-max-aggregate.input';

@ArgsType()
export class GameInsightAggregateArgs {

    @Field(() => GameInsightWhereInput, {nullable:true})
    where?: GameInsightWhereInput;

    @Field(() => [GameInsightOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameInsightOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameInsightWhereUniqueInput, {nullable:true})
    cursor?: GameInsightWhereUniqueInput;

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
