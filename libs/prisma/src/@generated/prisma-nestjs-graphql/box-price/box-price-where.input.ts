import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoxContractRelationFilter } from '../box-contract/box-contract-relation-filter.input';
import { BoxTypeRelationFilter } from '../box-type/box-type-relation-filter.input';
import { CurrencyRelationFilter } from '../currency/currency-relation-filter.input';

@InputType()
export class BoxPriceWhereInput {

    @Field(() => [BoxPriceWhereInput], {nullable:true})
    AND?: Array<BoxPriceWhereInput>;

    @Field(() => [BoxPriceWhereInput], {nullable:true})
    OR?: Array<BoxPriceWhereInput>;

    @Field(() => [BoxPriceWhereInput], {nullable:true})
    NOT?: Array<BoxPriceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    box_type_uid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    currency_uid?: StringFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    price?: DecimalNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contract_address?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => BoxContractRelationFilter, {nullable:true})
    contract?: BoxContractRelationFilter;

    @Field(() => BoxTypeRelationFilter, {nullable:true})
    boxType?: BoxTypeRelationFilter;

    @Field(() => CurrencyRelationFilter, {nullable:true})
    currency?: CurrencyRelationFilter;
}
