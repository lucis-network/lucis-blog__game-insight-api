import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumBoxCampaignBuyHistoriesStatusWithAggregatesFilter } from '../prisma/enum-box-campaign-buy-histories-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BoxCampaignBuyHistoryScalarWhereWithAggregatesInput {

    @Field(() => [BoxCampaignBuyHistoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BoxCampaignBuyHistoryScalarWhereWithAggregatesInput>;

    @Field(() => [BoxCampaignBuyHistoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BoxCampaignBuyHistoryScalarWhereWithAggregatesInput>;

    @Field(() => [BoxCampaignBuyHistoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BoxCampaignBuyHistoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    user_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    box_campaign_uid?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    round?: JsonNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    quantity?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    box_price_uid?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    box_type_uid?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    tx_hash?: StringNullableWithAggregatesFilter;

    @Field(() => EnumBoxCampaignBuyHistoriesStatusWithAggregatesFilter, {nullable:true})
    status?: EnumBoxCampaignBuyHistoriesStatusWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    box_price?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    data?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
