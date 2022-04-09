import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryWhereUniqueInput } from './box-campaign-buy-history-where-unique.input';
import { BoxCampaignBuyHistoryUpdateWithoutBoxInput } from './box-campaign-buy-history-update-without-box.input';
import { BoxCampaignBuyHistoryCreateWithoutBoxInput } from './box-campaign-buy-history-create-without-box.input';

@InputType()
export class BoxCampaignBuyHistoryUpsertWithWhereUniqueWithoutBoxInput {

    @Field(() => BoxCampaignBuyHistoryWhereUniqueInput, {nullable:false})
    where!: BoxCampaignBuyHistoryWhereUniqueInput;

    @Field(() => BoxCampaignBuyHistoryUpdateWithoutBoxInput, {nullable:false})
    update!: BoxCampaignBuyHistoryUpdateWithoutBoxInput;

    @Field(() => BoxCampaignBuyHistoryCreateWithoutBoxInput, {nullable:false})
    create!: BoxCampaignBuyHistoryCreateWithoutBoxInput;
}
