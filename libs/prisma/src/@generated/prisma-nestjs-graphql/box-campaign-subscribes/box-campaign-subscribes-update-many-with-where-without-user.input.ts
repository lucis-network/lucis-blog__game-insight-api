import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesScalarWhereInput } from './box-campaign-subscribes-scalar-where.input';
import { BoxCampaignSubscribesUpdateManyMutationInput } from './box-campaign-subscribes-update-many-mutation.input';

@InputType()
export class BoxCampaignSubscribesUpdateManyWithWhereWithoutUserInput {

    @Field(() => BoxCampaignSubscribesScalarWhereInput, {nullable:false})
    where!: BoxCampaignSubscribesScalarWhereInput;

    @Field(() => BoxCampaignSubscribesUpdateManyMutationInput, {nullable:false})
    data!: BoxCampaignSubscribesUpdateManyMutationInput;
}
