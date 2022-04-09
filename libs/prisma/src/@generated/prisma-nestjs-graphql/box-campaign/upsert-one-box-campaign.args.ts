import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignCreateInput } from './box-campaign-create.input';
import { BoxCampaignUpdateInput } from './box-campaign-update.input';

@ArgsType()
export class UpsertOneBoxCampaignArgs {

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignCreateInput, {nullable:false})
    create!: BoxCampaignCreateInput;

    @Field(() => BoxCampaignUpdateInput, {nullable:false})
    update!: BoxCampaignUpdateInput;
}
