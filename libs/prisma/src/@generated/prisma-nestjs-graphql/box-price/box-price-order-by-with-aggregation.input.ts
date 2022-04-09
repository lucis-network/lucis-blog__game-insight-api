import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoxPriceCountOrderByAggregateInput } from './box-price-count-order-by-aggregate.input';
import { BoxPriceAvgOrderByAggregateInput } from './box-price-avg-order-by-aggregate.input';
import { BoxPriceMaxOrderByAggregateInput } from './box-price-max-order-by-aggregate.input';
import { BoxPriceMinOrderByAggregateInput } from './box-price-min-order-by-aggregate.input';
import { BoxPriceSumOrderByAggregateInput } from './box-price-sum-order-by-aggregate.input';

@InputType()
export class BoxPriceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    box_type_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contract_address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BoxPriceCountOrderByAggregateInput, {nullable:true})
    _count?: BoxPriceCountOrderByAggregateInput;

    @Field(() => BoxPriceAvgOrderByAggregateInput, {nullable:true})
    _avg?: BoxPriceAvgOrderByAggregateInput;

    @Field(() => BoxPriceMaxOrderByAggregateInput, {nullable:true})
    _max?: BoxPriceMaxOrderByAggregateInput;

    @Field(() => BoxPriceMinOrderByAggregateInput, {nullable:true})
    _min?: BoxPriceMinOrderByAggregateInput;

    @Field(() => BoxPriceSumOrderByAggregateInput, {nullable:true})
    _sum?: BoxPriceSumOrderByAggregateInput;
}
