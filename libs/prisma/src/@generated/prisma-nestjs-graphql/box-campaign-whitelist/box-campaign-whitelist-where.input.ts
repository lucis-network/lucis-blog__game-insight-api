import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoxCampaignRelationFilter } from '../box-campaign/box-campaign-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BoxCampaignWhitelistWhereInput {

    @Field(() => [BoxCampaignWhitelistWhereInput], {nullable:true})
    AND?: Array<BoxCampaignWhitelistWhereInput>;

    @Field(() => [BoxCampaignWhitelistWhereInput], {nullable:true})
    OR?: Array<BoxCampaignWhitelistWhereInput>;

    @Field(() => [BoxCampaignWhitelistWhereInput], {nullable:true})
    NOT?: Array<BoxCampaignWhitelistWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    box_campaign_uid?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => BoxCampaignRelationFilter, {nullable:true})
    campaign?: BoxCampaignRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
