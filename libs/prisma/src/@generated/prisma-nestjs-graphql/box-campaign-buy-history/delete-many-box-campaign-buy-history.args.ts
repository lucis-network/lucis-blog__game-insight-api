import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryWhereInput } from './box-campaign-buy-history-where.input';

@ArgsType()
export class DeleteManyBoxCampaignBuyHistoryArgs {

    @Field(() => BoxCampaignBuyHistoryWhereInput, {nullable:true})
    where?: BoxCampaignBuyHistoryWhereInput;
}
