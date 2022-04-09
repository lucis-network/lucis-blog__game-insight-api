import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryWhereUniqueInput } from './box-campaign-buy-history-where-unique.input';
import { BoxCampaignBuyHistoryCreateInput } from './box-campaign-buy-history-create.input';
import { BoxCampaignBuyHistoryUpdateInput } from './box-campaign-buy-history-update.input';

@ArgsType()
export class UpsertOneBoxCampaignBuyHistoryArgs {

    @Field(() => BoxCampaignBuyHistoryWhereUniqueInput, {nullable:false})
    where!: BoxCampaignBuyHistoryWhereUniqueInput;

    @Field(() => BoxCampaignBuyHistoryCreateInput, {nullable:false})
    create!: BoxCampaignBuyHistoryCreateInput;

    @Field(() => BoxCampaignBuyHistoryUpdateInput, {nullable:false})
    update!: BoxCampaignBuyHistoryUpdateInput;
}
