import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignScalarWhereInput } from './box-campaign-scalar-where.input';
import { BoxCampaignUpdateManyMutationInput } from './box-campaign-update-many-mutation.input';

@InputType()
export class BoxCampaignUpdateManyWithWhereWithoutGameInput {

    @Field(() => BoxCampaignScalarWhereInput, {nullable:false})
    where!: BoxCampaignScalarWhereInput;

    @Field(() => BoxCampaignUpdateManyMutationInput, {nullable:false})
    data!: BoxCampaignUpdateManyMutationInput;
}
