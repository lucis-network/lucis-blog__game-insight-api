import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhitelistCreateManyCampaignInput } from './box-campaign-whitelist-create-many-campaign.input';

@InputType()
export class BoxCampaignWhitelistCreateManyCampaignInputEnvelope {

    @Field(() => [BoxCampaignWhitelistCreateManyCampaignInput], {nullable:false})
    data!: Array<BoxCampaignWhitelistCreateManyCampaignInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
