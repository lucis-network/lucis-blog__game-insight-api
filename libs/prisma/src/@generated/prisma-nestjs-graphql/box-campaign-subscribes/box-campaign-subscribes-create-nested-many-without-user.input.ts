import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesCreateWithoutUserInput } from './box-campaign-subscribes-create-without-user.input';
import { BoxCampaignSubscribesCreateOrConnectWithoutUserInput } from './box-campaign-subscribes-create-or-connect-without-user.input';
import { BoxCampaignSubscribesCreateManyUserInputEnvelope } from './box-campaign-subscribes-create-many-user-input-envelope.input';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';

@InputType()
export class BoxCampaignSubscribesCreateNestedManyWithoutUserInput {

    @Field(() => [BoxCampaignSubscribesCreateWithoutUserInput], {nullable:true})
    create?: Array<BoxCampaignSubscribesCreateWithoutUserInput>;

    @Field(() => [BoxCampaignSubscribesCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<BoxCampaignSubscribesCreateOrConnectWithoutUserInput>;

    @Field(() => BoxCampaignSubscribesCreateManyUserInputEnvelope, {nullable:true})
    createMany?: BoxCampaignSubscribesCreateManyUserInputEnvelope;

    @Field(() => [BoxCampaignSubscribesWhereUniqueInput], {nullable:true})
    connect?: Array<BoxCampaignSubscribesWhereUniqueInput>;
}
