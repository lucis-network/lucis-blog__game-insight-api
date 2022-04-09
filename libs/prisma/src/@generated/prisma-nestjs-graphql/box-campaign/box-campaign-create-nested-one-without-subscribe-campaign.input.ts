import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateWithoutSubscribeCampaignInput } from './box-campaign-create-without-subscribe-campaign.input';
import { BoxCampaignCreateOrConnectWithoutSubscribeCampaignInput } from './box-campaign-create-or-connect-without-subscribe-campaign.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';

@InputType()
export class BoxCampaignCreateNestedOneWithoutSubscribeCampaignInput {

    @Field(() => BoxCampaignCreateWithoutSubscribeCampaignInput, {nullable:true})
    create?: BoxCampaignCreateWithoutSubscribeCampaignInput;

    @Field(() => BoxCampaignCreateOrConnectWithoutSubscribeCampaignInput, {nullable:true})
    connectOrCreate?: BoxCampaignCreateOrConnectWithoutSubscribeCampaignInput;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:true})
    connect?: BoxCampaignWhereUniqueInput;
}
