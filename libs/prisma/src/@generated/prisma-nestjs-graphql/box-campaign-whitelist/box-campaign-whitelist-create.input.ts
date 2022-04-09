import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BoxCampaignCreateNestedOneWithoutWhitelistsInput } from '../box-campaign/box-campaign-create-nested-one-without-whitelists.input';

@InputType()
export class BoxCampaignWhitelistCreateInput {

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => BoxCampaignCreateNestedOneWithoutWhitelistsInput, {nullable:false})
    campaign!: BoxCampaignCreateNestedOneWithoutWhitelistsInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
