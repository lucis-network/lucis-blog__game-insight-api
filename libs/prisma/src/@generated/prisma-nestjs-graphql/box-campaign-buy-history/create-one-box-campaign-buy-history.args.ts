import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryCreateInput } from './box-campaign-buy-history-create.input';

@ArgsType()
export class CreateOneBoxCampaignBuyHistoryArgs {

    @Field(() => BoxCampaignBuyHistoryCreateInput, {nullable:false})
    data!: BoxCampaignBuyHistoryCreateInput;
}
