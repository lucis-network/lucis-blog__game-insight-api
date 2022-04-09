import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumBoxCampaignsStatusNullableFilter } from '../prisma/enum-box-campaigns-status-nullable-filter.input';
import { EnumPublishStatusNullableFilter } from '../prisma/enum-publish-status-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class BoxCampaignScalarWhereInput {

    @Field(() => [BoxCampaignScalarWhereInput], {nullable:true})
    AND?: Array<BoxCampaignScalarWhereInput>;

    @Field(() => [BoxCampaignScalarWhereInput], {nullable:true})
    OR?: Array<BoxCampaignScalarWhereInput>;

    @Field(() => [BoxCampaignScalarWhereInput], {nullable:true})
    NOT?: Array<BoxCampaignScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    uid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    game_uid?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    desc?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    rules?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cover_img?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    banner_img?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    rounds?: JsonNullableFilter;

    @Field(() => EnumBoxCampaignsStatusNullableFilter, {nullable:true})
    status?: EnumBoxCampaignsStatusNullableFilter;

    @Field(() => EnumPublishStatusNullableFilter, {nullable:true})
    publish_status?: EnumPublishStatusNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    opening_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    start?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    end?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    highlight?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    spotlight_position?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
