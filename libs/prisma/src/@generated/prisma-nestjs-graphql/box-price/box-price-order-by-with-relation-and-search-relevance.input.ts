import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoxContractOrderByWithRelationAndSearchRelevanceInput } from '../box-contract/box-contract-order-by-with-relation-and-search-relevance.input';
import { BoxTypeOrderByWithRelationAndSearchRelevanceInput } from '../box-type/box-type-order-by-with-relation-and-search-relevance.input';
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from '../currency/currency-order-by-with-relation-and-search-relevance.input';
import { BoxPriceOrderByRelevanceInput } from './box-price-order-by-relevance.input';

@InputType()
export class BoxPriceOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => BoxContractOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    contract?: BoxContractOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => BoxTypeOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    boxType?: BoxTypeOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => CurrencyOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    currency?: CurrencyOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => BoxPriceOrderByRelevanceInput, {nullable:true})
    _relevance?: BoxPriceOrderByRelevanceInput;
}
