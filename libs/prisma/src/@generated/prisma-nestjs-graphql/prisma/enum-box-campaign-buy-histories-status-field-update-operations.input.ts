import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoriesStatus } from './box-campaign-buy-histories-status.enum';

@InputType()
export class EnumBoxCampaignBuyHistoriesStatusFieldUpdateOperationsInput {

    @Field(() => BoxCampaignBuyHistoriesStatus, {nullable:true})
    set?: keyof typeof BoxCampaignBuyHistoriesStatus;
}
