import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignUpdateManyMutationInput } from './box-campaign-update-many-mutation.input';
import { BoxCampaignWhereInput } from './box-campaign-where.input';

@ArgsType()
export class UpdateManyBoxCampaignArgs {

    @Field(() => BoxCampaignUpdateManyMutationInput, {nullable:false})
    data!: BoxCampaignUpdateManyMutationInput;

    @Field(() => BoxCampaignWhereInput, {nullable:true})
    where?: BoxCampaignWhereInput;
}
