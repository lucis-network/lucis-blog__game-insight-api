import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhitelistCreateWithoutCampaignInput } from './box-campaign-whitelist-create-without-campaign.input';
import { BoxCampaignWhitelistCreateOrConnectWithoutCampaignInput } from './box-campaign-whitelist-create-or-connect-without-campaign.input';
import { BoxCampaignWhitelistUpsertWithWhereUniqueWithoutCampaignInput } from './box-campaign-whitelist-upsert-with-where-unique-without-campaign.input';
import { BoxCampaignWhitelistCreateManyCampaignInputEnvelope } from './box-campaign-whitelist-create-many-campaign-input-envelope.input';
import { BoxCampaignWhitelistWhereUniqueInput } from './box-campaign-whitelist-where-unique.input';
import { BoxCampaignWhitelistUpdateWithWhereUniqueWithoutCampaignInput } from './box-campaign-whitelist-update-with-where-unique-without-campaign.input';
import { BoxCampaignWhitelistUpdateManyWithWhereWithoutCampaignInput } from './box-campaign-whitelist-update-many-with-where-without-campaign.input';
import { BoxCampaignWhitelistScalarWhereInput } from './box-campaign-whitelist-scalar-where.input';

@InputType()
export class BoxCampaignWhitelistUncheckedUpdateManyWithoutCampaignInput {

    @Field(() => [BoxCampaignWhitelistCreateWithoutCampaignInput], {nullable:true})
    create?: Array<BoxCampaignWhitelistCreateWithoutCampaignInput>;

    @Field(() => [BoxCampaignWhitelistCreateOrConnectWithoutCampaignInput], {nullable:true})
    connectOrCreate?: Array<BoxCampaignWhitelistCreateOrConnectWithoutCampaignInput>;

    @Field(() => [BoxCampaignWhitelistUpsertWithWhereUniqueWithoutCampaignInput], {nullable:true})
    upsert?: Array<BoxCampaignWhitelistUpsertWithWhereUniqueWithoutCampaignInput>;

    @Field(() => BoxCampaignWhitelistCreateManyCampaignInputEnvelope, {nullable:true})
    createMany?: BoxCampaignWhitelistCreateManyCampaignInputEnvelope;

    @Field(() => [BoxCampaignWhitelistWhereUniqueInput], {nullable:true})
    set?: Array<BoxCampaignWhitelistWhereUniqueInput>;

    @Field(() => [BoxCampaignWhitelistWhereUniqueInput], {nullable:true})
    disconnect?: Array<BoxCampaignWhitelistWhereUniqueInput>;

    @Field(() => [BoxCampaignWhitelistWhereUniqueInput], {nullable:true})
    delete?: Array<BoxCampaignWhitelistWhereUniqueInput>;

    @Field(() => [BoxCampaignWhitelistWhereUniqueInput], {nullable:true})
    connect?: Array<BoxCampaignWhitelistWhereUniqueInput>;

    @Field(() => [BoxCampaignWhitelistUpdateWithWhereUniqueWithoutCampaignInput], {nullable:true})
    update?: Array<BoxCampaignWhitelistUpdateWithWhereUniqueWithoutCampaignInput>;

    @Field(() => [BoxCampaignWhitelistUpdateManyWithWhereWithoutCampaignInput], {nullable:true})
    updateMany?: Array<BoxCampaignWhitelistUpdateManyWithWhereWithoutCampaignInput>;

    @Field(() => [BoxCampaignWhitelistScalarWhereInput], {nullable:true})
    deleteMany?: Array<BoxCampaignWhitelistScalarWhereInput>;
}
