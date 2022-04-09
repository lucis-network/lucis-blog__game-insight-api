import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesCreateWithoutBox_campaignInput } from './box-campaign-subscribes-create-without-box-campaign.input';
import { BoxCampaignSubscribesCreateOrConnectWithoutBox_campaignInput } from './box-campaign-subscribes-create-or-connect-without-box-campaign.input';
import { BoxCampaignSubscribesCreateManyBox_campaignInputEnvelope } from './box-campaign-subscribes-create-many-box-campaign-input-envelope.input';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';

@InputType()
export class BoxCampaignSubscribesUncheckedCreateNestedManyWithoutBox_campaignInput {

    @Field(() => [BoxCampaignSubscribesCreateWithoutBox_campaignInput], {nullable:true})
    create?: Array<BoxCampaignSubscribesCreateWithoutBox_campaignInput>;

    @Field(() => [BoxCampaignSubscribesCreateOrConnectWithoutBox_campaignInput], {nullable:true})
    connectOrCreate?: Array<BoxCampaignSubscribesCreateOrConnectWithoutBox_campaignInput>;

    @Field(() => BoxCampaignSubscribesCreateManyBox_campaignInputEnvelope, {nullable:true})
    createMany?: BoxCampaignSubscribesCreateManyBox_campaignInputEnvelope;

    @Field(() => [BoxCampaignSubscribesWhereUniqueInput], {nullable:true})
    connect?: Array<BoxCampaignSubscribesWhereUniqueInput>;
}
