import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeCreateWithoutCampaignInput } from './box-type-create-without-campaign.input';
import { BoxTypeCreateOrConnectWithoutCampaignInput } from './box-type-create-or-connect-without-campaign.input';
import { BoxTypeUpsertWithWhereUniqueWithoutCampaignInput } from './box-type-upsert-with-where-unique-without-campaign.input';
import { BoxTypeCreateManyCampaignInputEnvelope } from './box-type-create-many-campaign-input-envelope.input';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';
import { BoxTypeUpdateWithWhereUniqueWithoutCampaignInput } from './box-type-update-with-where-unique-without-campaign.input';
import { BoxTypeUpdateManyWithWhereWithoutCampaignInput } from './box-type-update-many-with-where-without-campaign.input';
import { BoxTypeScalarWhereInput } from './box-type-scalar-where.input';

@InputType()
export class BoxTypeUpdateManyWithoutCampaignInput {

    @Field(() => [BoxTypeCreateWithoutCampaignInput], {nullable:true})
    create?: Array<BoxTypeCreateWithoutCampaignInput>;

    @Field(() => [BoxTypeCreateOrConnectWithoutCampaignInput], {nullable:true})
    connectOrCreate?: Array<BoxTypeCreateOrConnectWithoutCampaignInput>;

    @Field(() => [BoxTypeUpsertWithWhereUniqueWithoutCampaignInput], {nullable:true})
    upsert?: Array<BoxTypeUpsertWithWhereUniqueWithoutCampaignInput>;

    @Field(() => BoxTypeCreateManyCampaignInputEnvelope, {nullable:true})
    createMany?: BoxTypeCreateManyCampaignInputEnvelope;

    @Field(() => [BoxTypeWhereUniqueInput], {nullable:true})
    set?: Array<BoxTypeWhereUniqueInput>;

    @Field(() => [BoxTypeWhereUniqueInput], {nullable:true})
    disconnect?: Array<BoxTypeWhereUniqueInput>;

    @Field(() => [BoxTypeWhereUniqueInput], {nullable:true})
    delete?: Array<BoxTypeWhereUniqueInput>;

    @Field(() => [BoxTypeWhereUniqueInput], {nullable:true})
    connect?: Array<BoxTypeWhereUniqueInput>;

    @Field(() => [BoxTypeUpdateWithWhereUniqueWithoutCampaignInput], {nullable:true})
    update?: Array<BoxTypeUpdateWithWhereUniqueWithoutCampaignInput>;

    @Field(() => [BoxTypeUpdateManyWithWhereWithoutCampaignInput], {nullable:true})
    updateMany?: Array<BoxTypeUpdateManyWithWhereWithoutCampaignInput>;

    @Field(() => [BoxTypeScalarWhereInput], {nullable:true})
    deleteMany?: Array<BoxTypeScalarWhereInput>;
}
