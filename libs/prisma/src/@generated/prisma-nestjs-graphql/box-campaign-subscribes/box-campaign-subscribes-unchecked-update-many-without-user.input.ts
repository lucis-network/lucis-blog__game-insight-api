import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesCreateWithoutUserInput } from './box-campaign-subscribes-create-without-user.input';
import { BoxCampaignSubscribesCreateOrConnectWithoutUserInput } from './box-campaign-subscribes-create-or-connect-without-user.input';
import { BoxCampaignSubscribesUpsertWithWhereUniqueWithoutUserInput } from './box-campaign-subscribes-upsert-with-where-unique-without-user.input';
import { BoxCampaignSubscribesCreateManyUserInputEnvelope } from './box-campaign-subscribes-create-many-user-input-envelope.input';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';
import { BoxCampaignSubscribesUpdateWithWhereUniqueWithoutUserInput } from './box-campaign-subscribes-update-with-where-unique-without-user.input';
import { BoxCampaignSubscribesUpdateManyWithWhereWithoutUserInput } from './box-campaign-subscribes-update-many-with-where-without-user.input';
import { BoxCampaignSubscribesScalarWhereInput } from './box-campaign-subscribes-scalar-where.input';

@InputType()
export class BoxCampaignSubscribesUncheckedUpdateManyWithoutUserInput {

    @Field(() => [BoxCampaignSubscribesCreateWithoutUserInput], {nullable:true})
    create?: Array<BoxCampaignSubscribesCreateWithoutUserInput>;

    @Field(() => [BoxCampaignSubscribesCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<BoxCampaignSubscribesCreateOrConnectWithoutUserInput>;

    @Field(() => [BoxCampaignSubscribesUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<BoxCampaignSubscribesUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => BoxCampaignSubscribesCreateManyUserInputEnvelope, {nullable:true})
    createMany?: BoxCampaignSubscribesCreateManyUserInputEnvelope;

    @Field(() => [BoxCampaignSubscribesWhereUniqueInput], {nullable:true})
    set?: Array<BoxCampaignSubscribesWhereUniqueInput>;

    @Field(() => [BoxCampaignSubscribesWhereUniqueInput], {nullable:true})
    disconnect?: Array<BoxCampaignSubscribesWhereUniqueInput>;

    @Field(() => [BoxCampaignSubscribesWhereUniqueInput], {nullable:true})
    delete?: Array<BoxCampaignSubscribesWhereUniqueInput>;

    @Field(() => [BoxCampaignSubscribesWhereUniqueInput], {nullable:true})
    connect?: Array<BoxCampaignSubscribesWhereUniqueInput>;

    @Field(() => [BoxCampaignSubscribesUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<BoxCampaignSubscribesUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [BoxCampaignSubscribesUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<BoxCampaignSubscribesUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [BoxCampaignSubscribesScalarWhereInput], {nullable:true})
    deleteMany?: Array<BoxCampaignSubscribesScalarWhereInput>;
}
