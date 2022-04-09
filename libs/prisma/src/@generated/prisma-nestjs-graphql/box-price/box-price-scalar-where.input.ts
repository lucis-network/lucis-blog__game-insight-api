import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BoxPriceScalarWhereInput {

    @Field(() => [BoxPriceScalarWhereInput], {nullable:true})
    AND?: Array<BoxPriceScalarWhereInput>;

    @Field(() => [BoxPriceScalarWhereInput], {nullable:true})
    OR?: Array<BoxPriceScalarWhereInput>;

    @Field(() => [BoxPriceScalarWhereInput], {nullable:true})
    NOT?: Array<BoxPriceScalarWhereInput>;

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
}
