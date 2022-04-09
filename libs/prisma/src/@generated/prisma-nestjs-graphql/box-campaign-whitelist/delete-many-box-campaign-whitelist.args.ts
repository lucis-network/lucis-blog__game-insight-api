import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhitelistWhereInput } from './box-campaign-whitelist-where.input';

@ArgsType()
export class DeleteManyBoxCampaignWhitelistArgs {

    @Field(() => BoxCampaignWhitelistWhereInput, {nullable:true})
    where?: BoxCampaignWhitelistWhereInput;
}
