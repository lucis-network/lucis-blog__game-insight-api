import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhitelistWhereUniqueInput } from './box-campaign-whitelist-where-unique.input';
import { BoxCampaignWhitelistCreateWithoutCampaignInput } from './box-campaign-whitelist-create-without-campaign.input';

@InputType()
export class BoxCampaignWhitelistCreateOrConnectWithoutCampaignInput {

    @Field(() => BoxCampaignWhitelistWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhitelistWhereUniqueInput;

    @Field(() => BoxCampaignWhitelistCreateWithoutCampaignInput, {nullable:false})
    create!: BoxCampaignWhitelistCreateWithoutCampaignInput;
}
