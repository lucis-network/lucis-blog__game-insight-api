import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhitelistCreateInput } from './box-campaign-whitelist-create.input';

@ArgsType()
export class CreateOneBoxCampaignWhitelistArgs {

    @Field(() => BoxCampaignWhitelistCreateInput, {nullable:false})
    data!: BoxCampaignWhitelistCreateInput;
}
