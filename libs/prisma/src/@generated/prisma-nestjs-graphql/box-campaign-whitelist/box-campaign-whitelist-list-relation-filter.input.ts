import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhitelistWhereInput } from './box-campaign-whitelist-where.input';

@InputType()
export class BoxCampaignWhitelistListRelationFilter {

    @Field(() => BoxCampaignWhitelistWhereInput, {nullable:true})
    every?: BoxCampaignWhitelistWhereInput;

    @Field(() => BoxCampaignWhitelistWhereInput, {nullable:true})
    some?: BoxCampaignWhitelistWhereInput;

    @Field(() => BoxCampaignWhitelistWhereInput, {nullable:true})
    none?: BoxCampaignWhitelistWhereInput;
}
