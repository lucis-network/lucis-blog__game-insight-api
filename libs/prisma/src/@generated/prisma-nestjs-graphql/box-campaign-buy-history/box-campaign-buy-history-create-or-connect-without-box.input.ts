import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryWhereUniqueInput } from './box-campaign-buy-history-where-unique.input';
import { BoxCampaignBuyHistoryCreateWithoutBoxInput } from './box-campaign-buy-history-create-without-box.input';

@InputType()
export class BoxCampaignBuyHistoryCreateOrConnectWithoutBoxInput {

    @Field(() => BoxCampaignBuyHistoryWhereUniqueInput, {nullable:false})
    where!: BoxCampaignBuyHistoryWhereUniqueInput;

    @Field(() => BoxCampaignBuyHistoryCreateWithoutBoxInput, {nullable:false})
    create!: BoxCampaignBuyHistoryCreateWithoutBoxInput;
}
