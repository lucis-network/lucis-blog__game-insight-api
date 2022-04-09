import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhitelistUpdateManyMutationInput } from './box-campaign-whitelist-update-many-mutation.input';
import { BoxCampaignWhitelistWhereInput } from './box-campaign-whitelist-where.input';

@ArgsType()
export class UpdateManyBoxCampaignWhitelistArgs {

    @Field(() => BoxCampaignWhitelistUpdateManyMutationInput, {nullable:false})
    data!: BoxCampaignWhitelistUpdateManyMutationInput;

    @Field(() => BoxCampaignWhitelistWhereInput, {nullable:true})
    where?: BoxCampaignWhitelistWhereInput;
}
