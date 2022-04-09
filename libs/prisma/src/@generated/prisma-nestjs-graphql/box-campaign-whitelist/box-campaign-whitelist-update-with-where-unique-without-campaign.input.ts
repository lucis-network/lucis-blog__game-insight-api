import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhitelistWhereUniqueInput } from './box-campaign-whitelist-where-unique.input';
import { BoxCampaignWhitelistUpdateWithoutCampaignInput } from './box-campaign-whitelist-update-without-campaign.input';

@InputType()
export class BoxCampaignWhitelistUpdateWithWhereUniqueWithoutCampaignInput {

    @Field(() => BoxCampaignWhitelistWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhitelistWhereUniqueInput;

    @Field(() => BoxCampaignWhitelistUpdateWithoutCampaignInput, {nullable:false})
    data!: BoxCampaignWhitelistUpdateWithoutCampaignInput;
}
