import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignSubscribesCreateInput } from './box-campaign-subscribes-create.input';

@ArgsType()
export class CreateOneBoxCampaignSubscribesArgs {

    @Field(() => BoxCampaignSubscribesCreateInput, {nullable:false})
    data!: BoxCampaignSubscribesCreateInput;
}
