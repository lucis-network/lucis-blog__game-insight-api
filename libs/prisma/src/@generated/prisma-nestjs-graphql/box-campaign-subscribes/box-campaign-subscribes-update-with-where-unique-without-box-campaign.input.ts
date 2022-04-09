import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';
import { BoxCampaignSubscribesUpdateWithoutBox_campaignInput } from './box-campaign-subscribes-update-without-box-campaign.input';

@InputType()
export class BoxCampaignSubscribesUpdateWithWhereUniqueWithoutBox_campaignInput {

    @Field(() => BoxCampaignSubscribesWhereUniqueInput, {nullable:false})
    where!: BoxCampaignSubscribesWhereUniqueInput;

    @Field(() => BoxCampaignSubscribesUpdateWithoutBox_campaignInput, {nullable:false})
    data!: BoxCampaignSubscribesUpdateWithoutBox_campaignInput;
}
