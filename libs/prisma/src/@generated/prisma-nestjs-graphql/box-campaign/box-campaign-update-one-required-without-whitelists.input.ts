import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateWithoutWhitelistsInput } from './box-campaign-create-without-whitelists.input';
import { BoxCampaignCreateOrConnectWithoutWhitelistsInput } from './box-campaign-create-or-connect-without-whitelists.input';
import { BoxCampaignUpsertWithoutWhitelistsInput } from './box-campaign-upsert-without-whitelists.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignUpdateWithoutWhitelistsInput } from './box-campaign-update-without-whitelists.input';

@InputType()
export class BoxCampaignUpdateOneRequiredWithoutWhitelistsInput {

    @Field(() => BoxCampaignCreateWithoutWhitelistsInput, {nullable:true})
    create?: BoxCampaignCreateWithoutWhitelistsInput;

    @Field(() => BoxCampaignCreateOrConnectWithoutWhitelistsInput, {nullable:true})
    connectOrCreate?: BoxCampaignCreateOrConnectWithoutWhitelistsInput;

    @Field(() => BoxCampaignUpsertWithoutWhitelistsInput, {nullable:true})
    upsert?: BoxCampaignUpsertWithoutWhitelistsInput;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:true})
    connect?: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignUpdateWithoutWhitelistsInput, {nullable:true})
    update?: BoxCampaignUpdateWithoutWhitelistsInput;
}
