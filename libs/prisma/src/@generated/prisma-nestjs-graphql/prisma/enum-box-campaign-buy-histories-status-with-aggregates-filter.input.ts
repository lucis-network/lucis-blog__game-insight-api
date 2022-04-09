import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoriesStatus } from './box-campaign-buy-histories-status.enum';
import { NestedEnumBoxCampaignBuyHistoriesStatusWithAggregatesFilter } from './nested-enum-box-campaign-buy-histories-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBoxCampaignBuyHistoriesStatusFilter } from './nested-enum-box-campaign-buy-histories-status-filter.input';

@InputType()
export class EnumBoxCampaignBuyHistoriesStatusWithAggregatesFilter {

    @Field(() => BoxCampaignBuyHistoriesStatus, {nullable:true})
    equals?: keyof typeof BoxCampaignBuyHistoriesStatus;

    @Field(() => [BoxCampaignBuyHistoriesStatus], {nullable:true})
    in?: Array<keyof typeof BoxCampaignBuyHistoriesStatus>;

    @Field(() => [BoxCampaignBuyHistoriesStatus], {nullable:true})
    notIn?: Array<keyof typeof BoxCampaignBuyHistoriesStatus>;

    @Field(() => NestedEnumBoxCampaignBuyHistoriesStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBoxCampaignBuyHistoriesStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBoxCampaignBuyHistoriesStatusFilter, {nullable:true})
    _min?: NestedEnumBoxCampaignBuyHistoriesStatusFilter;

    @Field(() => NestedEnumBoxCampaignBuyHistoriesStatusFilter, {nullable:true})
    _max?: NestedEnumBoxCampaignBuyHistoriesStatusFilter;
}
