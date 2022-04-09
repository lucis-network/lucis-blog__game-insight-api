import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryUpdateManyMutationInput } from './box-campaign-buy-history-update-many-mutation.input';
import { BoxCampaignBuyHistoryWhereInput } from './box-campaign-buy-history-where.input';

@ArgsType()
export class UpdateManyBoxCampaignBuyHistoryArgs {

    @Field(() => BoxCampaignBuyHistoryUpdateManyMutationInput, {nullable:false})
    data!: BoxCampaignBuyHistoryUpdateManyMutationInput;

    @Field(() => BoxCampaignBuyHistoryWhereInput, {nullable:true})
    where?: BoxCampaignBuyHistoryWhereInput;
}
