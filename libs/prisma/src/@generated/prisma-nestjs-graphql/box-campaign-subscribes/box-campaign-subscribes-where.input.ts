import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { BoxCampaignRelationFilter } from '../box-campaign/box-campaign-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BoxCampaignSubscribesWhereInput {

    @Field(() => [BoxCampaignSubscribesWhereInput], {nullable:true})
    AND?: Array<BoxCampaignSubscribesWhereInput>;

    @Field(() => [BoxCampaignSubscribesWhereInput], {nullable:true})
    OR?: Array<BoxCampaignSubscribesWhereInput>;

    @Field(() => [BoxCampaignSubscribesWhereInput], {nullable:true})
    NOT?: Array<BoxCampaignSubscribesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    box_campaign_uid?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    round?: JsonNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    finish?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    enable_notify?: BoolFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => BoxCampaignRelationFilter, {nullable:true})
    box_campaign?: BoxCampaignRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
