import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChainOrderByWithRelationAndSearchRelevanceInput } from '../chain/chain-order-by-with-relation-and-search-relevance.input';
import { BoxPriceOrderByRelationAggregateInput } from '../box-price/box-price-order-by-relation-aggregate.input';
import { BoxContractOrderByRelevanceInput } from './box-contract-order-by-relevance.input';

@InputType()
export class BoxContractOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => ChainOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    chain?: ChainOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => BoxPriceOrderByRelationAggregateInput, {nullable:true})
    boxPrices?: BoxPriceOrderByRelationAggregateInput;

    @Field(() => BoxContractOrderByRelevanceInput, {nullable:true})
    _relevance?: BoxContractOrderByRelevanceInput;
}
