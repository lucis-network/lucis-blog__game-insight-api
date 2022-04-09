import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignCreateInput } from './box-campaign-create.input';

@ArgsType()
export class CreateOneBoxCampaignArgs {

    @Field(() => BoxCampaignCreateInput, {nullable:false})
    data!: BoxCampaignCreateInput;
}
