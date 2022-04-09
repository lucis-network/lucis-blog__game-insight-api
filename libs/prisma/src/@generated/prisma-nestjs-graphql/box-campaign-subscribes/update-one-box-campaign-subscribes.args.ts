import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignSubscribesUpdateInput } from './box-campaign-subscribes-update.input';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';

@ArgsType()
export class UpdateOneBoxCampaignSubscribesArgs {

    @Field(() => BoxCampaignSubscribesUpdateInput, {nullable:false})
    data!: BoxCampaignSubscribesUpdateInput;

    @Field(() => BoxCampaignSubscribesWhereUniqueInput, {nullable:false})
    where!: BoxCampaignSubscribesWhereUniqueInput;
}
