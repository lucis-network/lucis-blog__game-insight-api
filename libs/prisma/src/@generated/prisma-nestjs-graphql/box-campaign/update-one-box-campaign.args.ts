import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignUpdateInput } from './box-campaign-update.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';

@ArgsType()
export class UpdateOneBoxCampaignArgs {

    @Field(() => BoxCampaignUpdateInput, {nullable:false})
    data!: BoxCampaignUpdateInput;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhereUniqueInput;
}
