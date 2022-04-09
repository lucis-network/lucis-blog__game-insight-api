import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignCreateWithoutWhitelistsInput } from './box-campaign-create-without-whitelists.input';

@InputType()
export class BoxCampaignCreateOrConnectWithoutWhitelistsInput {

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignCreateWithoutWhitelistsInput, {nullable:false})
    create!: BoxCampaignCreateWithoutWhitelistsInput;
}
