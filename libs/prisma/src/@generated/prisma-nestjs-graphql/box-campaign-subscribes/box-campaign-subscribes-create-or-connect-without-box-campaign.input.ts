import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';
import { BoxCampaignSubscribesCreateWithoutBox_campaignInput } from './box-campaign-subscribes-create-without-box-campaign.input';

@InputType()
export class BoxCampaignSubscribesCreateOrConnectWithoutBox_campaignInput {

    @Field(() => BoxCampaignSubscribesWhereUniqueInput, {nullable:false})
    where!: BoxCampaignSubscribesWhereUniqueInput;

    @Field(() => BoxCampaignSubscribesCreateWithoutBox_campaignInput, {nullable:false})
    create!: BoxCampaignSubscribesCreateWithoutBox_campaignInput;
}
