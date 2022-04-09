import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignUpdateWithoutSubscribeCampaignInput } from './box-campaign-update-without-subscribe-campaign.input';
import { BoxCampaignCreateWithoutSubscribeCampaignInput } from './box-campaign-create-without-subscribe-campaign.input';

@InputType()
export class BoxCampaignUpsertWithoutSubscribeCampaignInput {

    @Field(() => BoxCampaignUpdateWithoutSubscribeCampaignInput, {nullable:false})
    update!: BoxCampaignUpdateWithoutSubscribeCampaignInput;

    @Field(() => BoxCampaignCreateWithoutSubscribeCampaignInput, {nullable:false})
    create!: BoxCampaignCreateWithoutSubscribeCampaignInput;
}
