import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhitelistWhereUniqueInput } from './box-campaign-whitelist-where-unique.input';
import { BoxCampaignWhitelistCreateInput } from './box-campaign-whitelist-create.input';
import { BoxCampaignWhitelistUpdateInput } from './box-campaign-whitelist-update.input';

@ArgsType()
export class UpsertOneBoxCampaignWhitelistArgs {

    @Field(() => BoxCampaignWhitelistWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhitelistWhereUniqueInput;

    @Field(() => BoxCampaignWhitelistCreateInput, {nullable:false})
    create!: BoxCampaignWhitelistCreateInput;

    @Field(() => BoxCampaignWhitelistUpdateInput, {nullable:false})
    update!: BoxCampaignWhitelistUpdateInput;
}
