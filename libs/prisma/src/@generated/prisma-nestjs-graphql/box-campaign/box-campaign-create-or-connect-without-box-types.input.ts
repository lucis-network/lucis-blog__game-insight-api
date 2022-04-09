import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignCreateWithoutBoxTypesInput } from './box-campaign-create-without-box-types.input';

@InputType()
export class BoxCampaignCreateOrConnectWithoutBoxTypesInput {

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:false})
    where!: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignCreateWithoutBoxTypesInput, {nullable:false})
    create!: BoxCampaignCreateWithoutBoxTypesInput;
}
