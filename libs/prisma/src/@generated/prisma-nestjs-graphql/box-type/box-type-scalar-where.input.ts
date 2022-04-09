import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BoxTypeScalarWhereInput {

    @Field(() => [BoxTypeScalarWhereInput], {nullable:true})
    AND?: Array<BoxTypeScalarWhereInput>;

    @Field(() => [BoxTypeScalarWhereInput], {nullable:true})
    OR?: Array<BoxTypeScalarWhereInput>;

    @Field(() => [BoxTypeScalarWhereInput], {nullable:true})
    NOT?: Array<BoxTypeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    box_campaign_uid?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    desc?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    total_amount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    sold_amount?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    thumb_img?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    series_content?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    limit_per_user?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
