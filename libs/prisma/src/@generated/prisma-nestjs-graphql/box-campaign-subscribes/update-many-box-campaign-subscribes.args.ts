import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignSubscribesUpdateManyMutationInput } from './box-campaign-subscribes-update-many-mutation.input';
import { BoxCampaignSubscribesWhereInput } from './box-campaign-subscribes-where.input';

@ArgsType()
export class UpdateManyBoxCampaignSubscribesArgs {

    @Field(() => BoxCampaignSubscribesUpdateManyMutationInput, {nullable:false})
    data!: BoxCampaignSubscribesUpdateManyMutationInput;

    @Field(() => BoxCampaignSubscribesWhereInput, {nullable:true})
    where?: BoxCampaignSubscribesWhereInput;
}
