import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainWhereInput } from './chain-where.input';
import { ChainOrderByWithAggregationInput } from './chain-order-by-with-aggregation.input';
import { ChainScalarFieldEnum } from './chain-scalar-field.enum';
import { ChainScalarWhereWithAggregatesInput } from './chain-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ChainCountAggregateInput } from './chain-count-aggregate.input';
import { ChainAvgAggregateInput } from './chain-avg-aggregate.input';
import { ChainSumAggregateInput } from './chain-sum-aggregate.input';
import { ChainMinAggregateInput } from './chain-min-aggregate.input';
import { ChainMaxAggregateInput } from './chain-max-aggregate.input';

@ArgsType()
export class ChainGroupByArgs {

    @Field(() => ChainWhereInput, {nullable:true})
    where?: ChainWhereInput;

    @Field(() => [ChainOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ChainOrderByWithAggregationInput>;

    @Field(() => [ChainScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ChainScalarFieldEnum>;

    @Field(() => ChainScalarWhereWithAggregatesInput, {nullable:true})
    having?: ChainScalarWhereWithAggregatesInput;

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
