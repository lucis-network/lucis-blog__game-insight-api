import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateWithoutSubscribeCampaignInput } from './box-campaign-create-without-subscribe-campaign.input';
import { BoxCampaignCreateOrConnectWithoutSubscribeCampaignInput } from './box-campaign-create-or-connect-without-subscribe-campaign.input';
import { BoxCampaignUpsertWithoutSubscribeCampaignInput } from './box-campaign-upsert-without-subscribe-campaign.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignUpdateWithoutSubscribeCampaignInput } from './box-campaign-update-without-subscribe-campaign.input';

@InputType()
export class BoxCampaignUpdateOneRequiredWithoutSubscribeCampaignInput {

    @Field(() => BoxCampaignCreateWithoutSubscribeCampaignInput, {nullable:true})
    create?: BoxCampaignCreateWithoutSubscribeCampaignInput;

    @Field(() => BoxCampaignCreateOrConnectWithoutSubscribeCampaignInput, {nullable:true})
    connectOrCreate?: BoxCampaignCreateOrConnectWithoutSubscribeCampaignInput;

    @Field(() => BoxCampaignUpsertWithoutSubscribeCampaignInput, {nullable:true})
    upsert?: BoxCampaignUpsertWithoutSubscribeCampaignInput;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:true})
    connect?: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignUpdateWithoutSubscribeCampaignInput, {nullable:true})
    update?: BoxCampaignUpdateWithoutSubscribeCampaignInput;
}
