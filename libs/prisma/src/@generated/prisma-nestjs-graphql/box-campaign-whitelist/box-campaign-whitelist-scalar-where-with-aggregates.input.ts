import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BoxCampaignWhitelistScalarWhereWithAggregatesInput {

    @Field(() => [BoxCampaignWhitelistScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BoxCampaignWhitelistScalarWhereWithAggregatesInput>;

    @Field(() => [BoxCampaignWhitelistScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BoxCampaignWhitelistScalarWhereWithAggregatesInput>;

    @Field(() => [BoxCampaignWhitelistScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BoxCampaignWhitelistScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    box_campaign_uid?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    user_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
