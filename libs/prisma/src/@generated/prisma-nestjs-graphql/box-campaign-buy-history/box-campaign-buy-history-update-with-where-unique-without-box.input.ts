import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryWhereUniqueInput } from './box-campaign-buy-history-where-unique.input';
import { BoxCampaignBuyHistoryUpdateWithoutBoxInput } from './box-campaign-buy-history-update-without-box.input';

@InputType()
export class BoxCampaignBuyHistoryUpdateWithWhereUniqueWithoutBoxInput {

    @Field(() => BoxCampaignBuyHistoryWhereUniqueInput, {nullable:false})
    where!: BoxCampaignBuyHistoryWhereUniqueInput;

    @Field(() => BoxCampaignBuyHistoryUpdateWithoutBoxInput, {nullable:false})
    data!: BoxCampaignBuyHistoryUpdateWithoutBoxInput;
}
