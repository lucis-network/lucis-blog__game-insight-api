import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainWhereInput } from './chain-where.input';
import { ChainOrderByWithRelationAndSearchRelevanceInput } from './chain-order-by-with-relation-and-search-relevance.input';
import { ChainWhereUniqueInput } from './chain-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChainCountAggregateInput } from './chain-count-aggregate.input';
import { ChainAvgAggregateInput } from './chain-avg-aggregate.input';
import { ChainSumAggregateInput } from './chain-sum-aggregate.input';
import { ChainMinAggregateInput } from './chain-min-aggregate.input';
import { ChainMaxAggregateInput } from './chain-max-aggregate.input';

@ArgsType()
export class ChainAggregateArgs {

    @Field(() => ChainWhereInput, {nullable:true})
    where?: ChainWhereInput;

    @Field(() => [ChainOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ChainOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ChainWhereUniqueInput, {nullable:true})
    cursor?: ChainWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChainCountAggregateInput, {nullable:true})
    _count?: ChainCountAggregateInput;

    @Field(() => ChainAvgAggregateInput, {nullable:true})
    _avg?: ChainAvgAggregateInput;

    @Field(() => ChainSumAggregateInput, {nullable:true})
    _sum?: ChainSumAggregateInput;

    @Field(() => ChainMinAggregateInput, {nullable:true})
    _min?: ChainMinAggregateInput;

    @Field(() => ChainMaxAggregateInput, {nullable:true})
    _max?: ChainMaxAggregateInput;
}
