import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChainCountOrderByAggregateInput } from './chain-count-order-by-aggregate.input';
import { ChainAvgOrderByAggregateInput } from './chain-avg-order-by-aggregate.input';
import { ChainMaxOrderByAggregateInput } from './chain-max-order-by-aggregate.input';
import { ChainMinOrderByAggregateInput } from './chain-min-order-by-aggregate.input';
import { ChainSumOrderByAggregateInput } from './chain-sum-order-by-aggregate.input';

@InputType()
export class ChainOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    symbol?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chain_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rpc_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => ChainCountOrderByAggregateInput, {nullable:true})
    _count?: ChainCountOrderByAggregateInput;

    @Field(() => ChainAvgOrderByAggregateInput, {nullable:true})
    _avg?: ChainAvgOrderByAggregateInput;

    @Field(() => ChainMaxOrderByAggregateInput, {nullable:true})
    _max?: ChainMaxOrderByAggregateInput;

    @Field(() => ChainMinOrderByAggregateInput, {nullable:true})
    _min?: ChainMinOrderByAggregateInput;

    @Field(() => ChainSumOrderByAggregateInput, {nullable:true})
    _sum?: ChainSumOrderByAggregateInput;
}
