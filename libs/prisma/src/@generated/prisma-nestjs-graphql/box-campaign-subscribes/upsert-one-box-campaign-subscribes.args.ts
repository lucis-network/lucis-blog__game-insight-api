import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';
import { BoxCampaignSubscribesCreateInput } from './box-campaign-subscribes-create.input';
import { BoxCampaignSubscribesUpdateInput } from './box-campaign-subscribes-update.input';

@ArgsType()
export class UpsertOneBoxCampaignSubscribesArgs {

    @Field(() => BoxCampaignSubscribesWhereUniqueInput, {nullable:false})
    where!: BoxCampaignSubscribesWhereUniqueInput;

    @Field(() => BoxCampaignSubscribesCreateInput, {nullable:false})
    create!: BoxCampaignSubscribesCreateInput;

    @Field(() => BoxCampaignSubscribesUpdateInput, {nullable:false})
    update!: BoxCampaignSubscribesUpdateInput;
}
