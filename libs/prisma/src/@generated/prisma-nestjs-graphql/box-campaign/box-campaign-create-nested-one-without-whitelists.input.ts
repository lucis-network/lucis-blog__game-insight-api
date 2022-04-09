import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateWithoutWhitelistsInput } from './box-campaign-create-without-whitelists.input';
import { BoxCampaignCreateOrConnectWithoutWhitelistsInput } from './box-campaign-create-or-connect-without-whitelists.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';

@InputType()
export class BoxCampaignCreateNestedOneWithoutWhitelistsInput {

    @Field(() => BoxCampaignCreateWithoutWhitelistsInput, {nullable:true})
    create?: BoxCampaignCreateWithoutWhitelistsInput;

    @Field(() => BoxCampaignCreateOrConnectWithoutWhitelistsInput, {nullable:true})
    connectOrCreate?: BoxCampaignCreateOrConnectWithoutWhitelistsInput;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:true})
    connect?: BoxCampaignWhereUniqueInput;
}
