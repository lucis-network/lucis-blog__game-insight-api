import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignUpdateWithoutWhitelistsInput } from './box-campaign-update-without-whitelists.input';
import { BoxCampaignCreateWithoutWhitelistsInput } from './box-campaign-create-without-whitelists.input';

@InputType()
export class BoxCampaignUpsertWithoutWhitelistsInput {

    @Field(() => BoxCampaignUpdateWithoutWhitelistsInput, {nullable:false})
    update!: BoxCampaignUpdateWithoutWhitelistsInput;

    @Field(() => BoxCampaignCreateWithoutWhitelistsInput, {nullable:false})
    create!: BoxCampaignCreateWithoutWhitelistsInput;
}
