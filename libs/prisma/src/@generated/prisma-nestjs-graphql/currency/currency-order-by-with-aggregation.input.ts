import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CurrencyCountOrderByAggregateInput } from './currency-count-order-by-aggregate.input';
import { CurrencyMaxOrderByAggregateInput } from './currency-max-order-by-aggregate.input';
import { CurrencyMinOrderByAggregateInput } from './currency-min-order-by-aggregate.input';

@InputType()
export class CurrencyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    symbol?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    chain_symbol?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    owner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => CurrencyCountOrderByAggregateInput, {nullable:true})
    _count?: CurrencyCountOrderByAggregateInput;

    @Field(() => CurrencyMaxOrderByAggregateInput, {nullable:true})
    _max?: CurrencyMaxOrderByAggregateInput;

    @Field(() => CurrencyMinOrderByAggregateInput, {nullable:true})
    _min?: CurrencyMinOrderByAggregateInput;
}
