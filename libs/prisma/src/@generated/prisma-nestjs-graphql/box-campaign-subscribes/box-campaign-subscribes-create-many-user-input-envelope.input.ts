import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesCreateManyUserInput } from './box-campaign-subscribes-create-many-user.input';

@InputType()
export class BoxCampaignSubscribesCreateManyUserInputEnvelope {

    @Field(() => [BoxCampaignSubscribesCreateManyUserInput], {nullable:false})
    data!: Array<BoxCampaignSubscribesCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
