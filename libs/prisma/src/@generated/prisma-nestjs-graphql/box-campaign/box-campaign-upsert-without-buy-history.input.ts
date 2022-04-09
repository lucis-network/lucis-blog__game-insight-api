import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignUpdateWithoutBuyHistoryInput } from './box-campaign-update-without-buy-history.input';
import { BoxCampaignCreateWithoutBuyHistoryInput } from './box-campaign-create-without-buy-history.input';

@InputType()
export class BoxCampaignUpsertWithoutBuyHistoryInput {

    @Field(() => BoxCampaignUpdateWithoutBuyHistoryInput, {nullable:false})
    update!: BoxCampaignUpdateWithoutBuyHistoryInput;

    @Field(() => BoxCampaignCreateWithoutBuyHistoryInput, {nullable:false})
    create!: BoxCampaignCreateWithoutBuyHistoryInput;
}
