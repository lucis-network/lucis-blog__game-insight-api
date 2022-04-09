import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { EnumBoxCampaignsStatusNullableWithAggregatesFilter } from '../prisma/enum-box-campaigns-status-nullable-with-aggregates-filter.input';
import { EnumPublishStatusNullableWithAggregatesFilter } from '../prisma/enum-publish-status-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class BoxCampaignScalarWhereWithAggregatesInput {

    @Field(() => [BoxCampaignScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BoxCampaignScalarWhereWithAggregatesInput>;

    @Field(() => [BoxCampaignScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BoxCampaignScalarWhereWithAggregatesInput>;

    @Field(() => [BoxCampaignScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BoxCampaignScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    uid?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    game_uid?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    desc?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    rules?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    cover_img?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    banner_img?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    rounds?: JsonNullableWithAggregatesFilter;

    @Field(() => EnumBoxCampaignsStatusNullableWithAggregatesFilter, {nullable:true})
    status?: EnumBoxCampaignsStatusNullableWithAggregatesFilter;

    @Field(() => EnumPublishStatusNullableWithAggregatesFilter, {nullable:true})
    publish_status?: EnumPublishStatusNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    opening_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    start?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    end?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    highlight?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    spotlight_position?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
