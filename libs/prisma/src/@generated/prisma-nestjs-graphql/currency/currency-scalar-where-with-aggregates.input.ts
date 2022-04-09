import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumChainSymbolWithAggregatesFilter } from '../prisma/enum-chain-symbol-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CurrencyScalarWhereWithAggregatesInput {

    @Field(() => [CurrencyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CurrencyScalarWhereWithAggregatesInput>;

    @Field(() => [CurrencyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CurrencyScalarWhereWithAggregatesInput>;

    @Field(() => [CurrencyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CurrencyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uid?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    symbol?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    icon?: StringNullableWithAggregatesFilter;

    @Field(() => EnumChainSymbolWithAggregatesFilter, {nullable:true})
    chain_symbol?: EnumChainSymbolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    owner?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
