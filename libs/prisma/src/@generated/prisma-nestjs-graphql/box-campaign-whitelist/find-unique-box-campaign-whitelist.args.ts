import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhitelistWhereUniqueInput } from './box-campaign-whitelist-where-unique.input';

@ArgsType()
export class FindUniqueBoxCampaignWhitelistArgs {

    @Field(() => BoxCampaignWhitelistWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhitelistWhereUniqueInput;
}
