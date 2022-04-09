import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumChainSymbolFilter } from '../prisma/enum-chain-symbol-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ChainRelationFilter } from '../chain/chain-relation-filter.input';
import { BoxPriceListRelationFilter } from '../box-price/box-price-list-relation-filter.input';

@InputType()
export class BoxContractWhereInput {

    @Field(() => [BoxContractWhereInput], {nullable:true})
    AND?: Array<BoxContractWhereInput>;

    @Field(() => [BoxContractWhereInput], {nullable:true})
    OR?: Array<BoxContractWhereInput>;

    @Field(() => [BoxContractWhereInput], {nullable:true})
    NOT?: Array<BoxContractWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    owner?: StringNullableFilter;

    @Field(() => EnumChainSymbolFilter, {nullable:true})
    chain_symbol?: EnumChainSymbolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    currency_symbol?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    admin_address?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    admin_prv_key?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_transfered?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => ChainRelationFilter, {nullable:true})
    chain?: ChainRelationFilter;

    @Field(() => BoxPriceListRelationFilter, {nullable:true})
    boxPrices?: BoxPriceListRelationFilter;
}
