import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoxPriceListRelationFilter } from '../box-price/box-price-list-relation-filter.input';
import { BoxCampaignRelationFilter } from '../box-campaign/box-campaign-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BoxTypeWhereInput {

    @Field(() => [BoxTypeWhereInput], {nullable:true})
    AND?: Array<BoxTypeWhereInput>;

    @Field(() => [BoxTypeWhereInput], {nullable:true})
    OR?: Array<BoxTypeWhereInput>;

    @Field(() => [BoxTypeWhereInput], {nullable:true})
    NOT?: Array<BoxTypeWhereInput>;

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

    @Field(() => BoxPriceListRelationFilter, {nullable:true})
    prices?: BoxPriceListRelationFilter;

    @Field(() => BoxCampaignRelationFilter, {nullable:true})
    campaign?: BoxCampaignRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
