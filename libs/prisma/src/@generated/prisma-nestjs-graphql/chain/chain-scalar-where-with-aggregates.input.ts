import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumChainSymbolWithAggregatesFilter } from '../prisma/enum-chain-symbol-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ChainScalarWhereWithAggregatesInput {

    @Field(() => [ChainScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChainScalarWhereWithAggregatesInput>;

    @Field(() => [ChainScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChainScalarWhereWithAggregatesInput>;

    @Field(() => [ChainScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChainScalarWhereWithAggregatesInput>;

    @Field(() => EnumChainSymbolWithAggregatesFilter, {nullable:true})
    symbol?: EnumChainSymbolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    icon?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    chain_id?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    rpc_url?: StringNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    status?: BoolNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
