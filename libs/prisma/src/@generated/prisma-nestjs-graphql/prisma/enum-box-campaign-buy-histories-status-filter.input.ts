import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoriesStatus } from './box-campaign-buy-histories-status.enum';
import { NestedEnumBoxCampaignBuyHistoriesStatusFilter } from './nested-enum-box-campaign-buy-histories-status-filter.input';

@InputType()
export class EnumBoxCampaignBuyHistoriesStatusFilter {

    @Field(() => BoxCampaignBuyHistoriesStatus, {nullable:true})
    equals?: keyof typeof BoxCampaignBuyHistoriesStatus;

    @Field(() => [BoxCampaignBuyHistoriesStatus], {nullable:true})
    in?: Array<keyof typeof BoxCampaignBuyHistoriesStatus>;

    @Field(() => [BoxCampaignBuyHistoriesStatus], {nullable:true})
    notIn?: Array<keyof typeof BoxCampaignBuyHistoriesStatus>;

    @Field(() => NestedEnumBoxCampaignBuyHistoriesStatusFilter, {nullable:true})
    not?: NestedEnumBoxCampaignBuyHistoriesStatusFilter;
}
