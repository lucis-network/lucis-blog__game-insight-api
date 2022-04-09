import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhitelistUpdateInput } from './box-campaign-whitelist-update.input';
import { BoxCampaignWhitelistWhereUniqueInput } from './box-campaign-whitelist-where-unique.input';

@ArgsType()
export class UpdateOneBoxCampaignWhitelistArgs {

    @Field(() => BoxCampaignWhitelistUpdateInput, {nullable:false})
    data!: BoxCampaignWhitelistUpdateInput;

    @Field(() => BoxCampaignWhitelistWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhitelistWhereUniqueInput;
}
