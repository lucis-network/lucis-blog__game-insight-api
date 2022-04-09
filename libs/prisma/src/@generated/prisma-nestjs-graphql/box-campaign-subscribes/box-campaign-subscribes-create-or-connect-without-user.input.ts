import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';
import { BoxCampaignSubscribesCreateWithoutUserInput } from './box-campaign-subscribes-create-without-user.input';

@InputType()
export class BoxCampaignSubscribesCreateOrConnectWithoutUserInput {

    @Field(() => BoxCampaignSubscribesWhereUniqueInput, {nullable:false})
    where!: BoxCampaignSubscribesWhereUniqueInput;

    @Field(() => BoxCampaignSubscribesCreateWithoutUserInput, {nullable:false})
    create!: BoxCampaignSubscribesCreateWithoutUserInput;
}
