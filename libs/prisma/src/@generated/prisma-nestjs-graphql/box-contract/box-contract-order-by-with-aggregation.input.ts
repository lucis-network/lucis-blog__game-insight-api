import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoxContractCountOrderByAggregateInput } from './box-contract-count-order-by-aggregate.input';
import { BoxContractMaxOrderByAggregateInput } from './box-contract-max-order-by-aggregate.input';
import { BoxContractMinOrderByAggregateInput } from './box-contract-min-order-by-aggregate.input';

@InputType()
export class BoxContractOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chain_symbol?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency_symbol?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_prv_key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_transfered?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BoxContractCountOrderByAggregateInput, {nullable:true})
    _count?: BoxContractCountOrderByAggregateInput;

    @Field(() => BoxContractMaxOrderByAggregateInput, {nullable:true})
    _max?: BoxContractMaxOrderByAggregateInput;

    @Field(() => BoxContractMinOrderByAggregateInput, {nullable:true})
    _min?: BoxContractMinOrderByAggregateInput;
}
