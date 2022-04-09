import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryUpdateInput } from './box-campaign-buy-history-update.input';
import { BoxCampaignBuyHistoryWhereUniqueInput } from './box-campaign-buy-history-where-unique.input';

@ArgsType()
export class UpdateOneBoxCampaignBuyHistoryArgs {

    @Field(() => BoxCampaignBuyHistoryUpdateInput, {nullable:false})
    data!: BoxCampaignBuyHistoryUpdateInput;

    @Field(() => BoxCampaignBuyHistoryWhereUniqueInput, {nullable:false})
    where!: BoxCampaignBuyHistoryWhereUniqueInput;
}
