import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhitelistCreateWithoutCampaignInput } from './box-campaign-whitelist-create-without-campaign.input';
import { BoxCampaignWhitelistCreateOrConnectWithoutCampaignInput } from './box-campaign-whitelist-create-or-connect-without-campaign.input';
import { BoxCampaignWhitelistCreateManyCampaignInputEnvelope } from './box-campaign-whitelist-create-many-campaign-input-envelope.input';
import { BoxCampaignWhitelistWhereUniqueInput } from './box-campaign-whitelist-where-unique.input';

@InputType()
export class BoxCampaignWhitelistCreateNestedManyWithoutCampaignInput {

    @Field(() => [BoxCampaignWhitelistCreateWithoutCampaignInput], {nullable:true})
    create?: Array<BoxCampaignWhitelistCreateWithoutCampaignInput>;

    @Field(() => [BoxCampaignWhitelistCreateOrConnectWithoutCampaignInput], {nullable:true})
    connectOrCreate?: Array<BoxCampaignWhitelistCreateOrConnectWithoutCampaignInput>;

    @Field(() => BoxCampaignWhitelistCreateManyCampaignInputEnvelope, {nullable:true})
    createMany?: BoxCampaignWhitelistCreateManyCampaignInputEnvelope;

    @Field(() => [BoxCampaignWhitelistWhereUniqueInput], {nullable:true})
    connect?: Array<BoxCampaignWhitelistWhereUniqueInput>;
}
