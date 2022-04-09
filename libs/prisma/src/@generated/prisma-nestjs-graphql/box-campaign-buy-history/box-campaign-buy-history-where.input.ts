import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumBoxCampaignBuyHistoriesStatusFilter } from '../prisma/enum-box-campaign-buy-histories-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoxCampaignRelationFilter } from '../box-campaign/box-campaign-relation-filter.input';

@InputType()
export class BoxCampaignBuyHistoryWhereInput {

    @Field(() => [BoxCampaignBuyHistoryWhereInput], {nullable:true})
    AND?: Array<BoxCampaignBuyHistoryWhereInput>;

    @Field(() => [BoxCampaignBuyHistoryWhereInput], {nullable:true})
    OR?: Array<BoxCampaignBuyHistoryWhereInput>;

    @Field(() => [BoxCampaignBuyHistoryWhereInput], {nullable:true})
    NOT?: Array<BoxCampaignBuyHistoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    box_campaign_uid?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    round?: JsonNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quantity?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    box_price_uid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    box_type_uid?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tx_hash?: StringNullableFilter;

    @Field(() => EnumBoxCampaignBuyHistoriesStatusFilter, {nullable:true})
    status?: EnumBoxCampaignBuyHistoriesStatusFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    box_price?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    data?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => BoxCampaignRelationFilter, {nullable:true})
    box?: BoxCampaignRelationFilter;
}
