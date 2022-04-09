import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumChainSymbolWithAggregatesFilter } from '../prisma/enum-chain-symbol-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BoxContractScalarWhereWithAggregatesInput {

    @Field(() => [BoxContractScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BoxContractScalarWhereWithAggregatesInput>;

    @Field(() => [BoxContractScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BoxContractScalarWhereWithAggregatesInput>;

    @Field(() => [BoxContractScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BoxContractScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uid?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    owner?: StringNullableWithAggregatesFilter;

    @Field(() => EnumChainSymbolWithAggregatesFilter, {nullable:true})
    chain_symbol?: EnumChainSymbolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    currency_symbol?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    admin_address?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    admin_prv_key?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_transfered?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
