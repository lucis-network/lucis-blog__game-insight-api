import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumChainSymbolFilter } from '../prisma/enum-chain-symbol-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CurrencyListRelationFilter } from '../currency/currency-list-relation-filter.input';

@InputType()
export class ChainWhereInput {

    @Field(() => [ChainWhereInput], {nullable:true})
    AND?: Array<ChainWhereInput>;

    @Field(() => [ChainWhereInput], {nullable:true})
    OR?: Array<ChainWhereInput>;

    @Field(() => [ChainWhereInput], {nullable:true})
    NOT?: Array<ChainWhereInput>;

    @Field(() => EnumChainSymbolFilter, {nullable:true})
    symbol?: EnumChainSymbolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    chain_id?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    rpc_url?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    status?: BoolNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => CurrencyListRelationFilter, {nullable:true})
    currencies?: CurrencyListRelationFilter;
}
