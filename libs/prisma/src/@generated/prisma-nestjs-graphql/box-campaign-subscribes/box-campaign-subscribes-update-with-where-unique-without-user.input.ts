import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';
import { BoxCampaignSubscribesUpdateWithoutUserInput } from './box-campaign-subscribes-update-without-user.input';

@InputType()
export class BoxCampaignSubscribesUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => BoxCampaignSubscribesWhereUniqueInput, {nullable:false})
    where!: BoxCampaignSubscribesWhereUniqueInput;

    @Field(() => BoxCampaignSubscribesUpdateWithoutUserInput, {nullable:false})
    data!: BoxCampaignSubscribesUpdateWithoutUserInput;
}
