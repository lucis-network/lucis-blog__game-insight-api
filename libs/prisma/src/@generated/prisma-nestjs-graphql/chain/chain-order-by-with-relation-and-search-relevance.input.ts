import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CurrencyOrderByRelationAggregateInput } from '../currency/currency-order-by-relation-aggregate.input';
import { BoxContractOrderByRelationAggregateInput } from '../box-contract/box-contract-order-by-relation-aggregate.input';
import { ChainOrderByRelevanceInput } from './chain-order-by-relevance.input';

@InputType()
export class ChainOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => CurrencyOrderByRelationAggregateInput, {nullable:true})
    currencies?: CurrencyOrderByRelationAggregateInput;

    @Field(() => BoxContractOrderByRelationAggregateInput, {nullable:true})
    nftBox?: BoxContractOrderByRelationAggregateInput;

    @Field(() => ChainOrderByRelevanceInput, {nullable:true})
    _relevance?: ChainOrderByRelevanceInput;
}
