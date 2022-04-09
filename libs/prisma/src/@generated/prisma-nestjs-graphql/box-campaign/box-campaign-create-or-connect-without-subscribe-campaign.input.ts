import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignCreateWithoutSubscribeCampaignInput } from './box-campaign-create-without-subscribe-campaign.input';

@InputType()
export class BoxCampaignCreateOrConnectWithoutSubscribeCampaignInput {

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignCreateWithoutSubscribeCampaignInput, {nullable:false})
    create!: BoxCampaignCreateWithoutSubscribeCampaignInput;
}
