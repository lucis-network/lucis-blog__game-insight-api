import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignUpdateWithoutBoxTypesInput } from './box-campaign-update-without-box-types.input';
import { BoxCampaignCreateWithoutBoxTypesInput } from './box-campaign-create-without-box-types.input';

@InputType()
export class BoxCampaignUpsertWithoutBoxTypesInput {

    @Field(() => BoxCampaignUpdateWithoutBoxTypesInput, {nullable:false})
    update!: BoxCampaignUpdateWithoutBoxTypesInput;

    @Field(() => BoxCampaignCreateWithoutBoxTypesInput, {nullable:false})
    create!: BoxCampaignCreateWithoutBoxTypesInput;
}
