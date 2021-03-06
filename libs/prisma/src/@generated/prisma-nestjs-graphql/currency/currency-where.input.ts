import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumChainSymbolFilter } from '../prisma/enum-chain-symbol-filter.input';
import { ChainRelationFilter } from '../chain/chain-relation-filter.input';
import { GameStatisticsListRelationFilter } from '../game-statistics/game-statistics-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CurrencyWhereInput {

    @Field(() => [CurrencyWhereInput], {nullable:true})
    AND?: Array<CurrencyWhereInput>;

    @Field(() => [CurrencyWhereInput], {nullable:true})
    OR?: Array<CurrencyWhereInput>;

    @Field(() => [CurrencyWhereInput], {nullable:true})
    NOT?: Array<CurrencyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    symbol?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => EnumChainSymbolFilter, {nullable:true})
    chain_symbol?: EnumChainSymbolFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    owner?: StringNullableFilter;

    @Field(() => ChainRelationFilter, {nullable:true})
    chain?: ChainRelationFilter;

    @Field(() => GameStatisticsListRelationFilter, {nullable:true})
    game_statistic?: GameStatisticsListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
