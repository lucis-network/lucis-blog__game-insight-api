import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesCreateWithoutBox_campaignInput } from './box-campaign-subscribes-create-without-box-campaign.input';
import { BoxCampaignSubscribesCreateOrConnectWithoutBox_campaignInput } from './box-campaign-subscribes-create-or-connect-without-box-campaign.input';
import { BoxCampaignSubscribesUpsertWithWhereUniqueWithoutBox_campaignInput } from './box-campaign-subscribes-upsert-with-where-unique-without-box-campaign.input';
import { BoxCampaignSubscribesCreateManyBox_campaignInputEnvelope } from './box-campaign-subscribes-create-many-box-campaign-input-envelope.input';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';
import { BoxCampaignSubscribesUpdateWithWhereUniqueWithoutBox_campaignInput } from './box-campaign-subscribes-update-with-where-unique-without-box-campaign.input';
import { BoxCampaignSubscribesUpdateManyWithWhereWithoutBox_campaignInput } from './box-campaign-subscribes-update-many-with-where-without-box-campaign.input';
import { BoxCampaignSubscribesScalarWhereInput } from './box-campaign-subscribes-scalar-where.input';

@InputType()
export class BoxCampaignSubscribesUpdateManyWithoutBox_campaignInput {

    @Field(() => [BoxCampaignSubscribesCreateWithoutBox_campaignInput], {nullable:true})
    create?: Array<BoxCampaignSubscribesCreateWithoutBox_campaignInput>;

    @Field(() => [BoxCampaignSubscribesCreateOrConnectWithoutBox_campaignInput], {nullable:true})
    connectOrCreate?: Array<BoxCampaignSubscribesCreateOrConnectWithoutBox_campaignInput>;

    @Field(() => [BoxCampaignSubscribesUpsertWithWhereUniqueWithoutBox_campaignInput], {nullable:true})
    upsert?: Array<BoxCampaignSubscribesUpsertWithWhereUniqueWithoutBox_campaignInput>;

    @Field(() => BoxCampaignSubscribesCreateManyBox_campaignInputEnvelope, {nullable:true})
    createMany?: BoxCampaignSubscribesCreateManyBox_campaignInputEnvelope;

    @Field(() => [BoxCampaignSubscribesWhereUniqueInput], {nullable:true})
    set?: Array<BoxCampaignSubscribesWhereUniqueInput>;

    @Field(() => [BoxCampaignSubscribesWhereUniqueInput], {nullable:true})
    disconnect?: Array<BoxCampaignSubscribesWhereUniqueInput>;

    @Field(() => [BoxCampaignSubscribesWhereUniqueInput], {nullable:true})
    delete?: Array<BoxCampaignSubscribesWhereUniqueInput>;

    @Field(() => [BoxCampaignSubscribesWhereUniqueInput], {nullable:true})
    connect?: Array<BoxCampaignSubscribesWhereUniqueInput>;

    @Field(() => [BoxCampaignSubscribesUpdateWithWhereUniqueWithoutBox_campaignInput], {nullable:true})
    update?: Array<BoxCampaignSubscribesUpdateWithWhereUniqueWithoutBox_campaignInput>;

    @Field(() => [BoxCampaignSubscribesUpdateManyWithWhereWithoutBox_campaignInput], {nullable:true})
    updateMany?: Array<BoxCampaignSubscribesUpdateManyWithWhereWithoutBox_campaignInput>;

    @Field(() => [BoxCampaignSubscribesScalarWhereInput], {nullable:true})
    deleteMany?: Array<BoxCampaignSubscribesScalarWhereInput>;
}
