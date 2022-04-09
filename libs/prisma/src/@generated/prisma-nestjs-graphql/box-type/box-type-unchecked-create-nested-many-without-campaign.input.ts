import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeCreateWithoutCampaignInput } from './box-type-create-without-campaign.input';
import { BoxTypeCreateOrConnectWithoutCampaignInput } from './box-type-create-or-connect-without-campaign.input';
import { BoxTypeCreateManyCampaignInputEnvelope } from './box-type-create-many-campaign-input-envelope.input';
import { BoxTypeWhereUniqueInput } from './box-type-where-unique.input';

@InputType()
export class BoxTypeUncheckedCreateNestedManyWithoutCampaignInput {

    @Field(() => [BoxTypeCreateWithoutCampaignInput], {nullable:true})
    create?: Array<BoxTypeCreateWithoutCampaignInput>;

    @Field(() => [BoxTypeCreateOrConnectWithoutCampaignInput], {nullable:true})
    connectOrCreate?: Array<BoxTypeCreateOrConnectWithoutCampaignInput>;

    @Field(() => BoxTypeCreateManyCampaignInputEnvelope, {nullable:true})
    createMany?: BoxTypeCreateManyCampaignInputEnvelope;

    @Field(() => [BoxTypeWhereUniqueInput], {nullable:true})
    connect?: Array<BoxTypeWhereUniqueInput>;
}
