import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';
import { BoxCampaignSubscribesUpdateWithoutUserInput } from './box-campaign-subscribes-update-without-user.input';
import { BoxCampaignSubscribesCreateWithoutUserInput } from './box-campaign-subscribes-create-without-user.input';

@InputType()
export class BoxCampaignSubscribesUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => BoxCampaignSubscribesWhereUniqueInput, {nullable:false})
    where!: BoxCampaignSubscribesWhereUniqueInput;

    @Field(() => BoxCampaignSubscribesUpdateWithoutUserInput, {nullable:false})
    update!: BoxCampaignSubscribesUpdateWithoutUserInput;

    @Field(() => BoxCampaignSubscribesCreateWithoutUserInput, {nullable:false})
    create!: BoxCampaignSubscribesCreateWithoutUserInput;
}
