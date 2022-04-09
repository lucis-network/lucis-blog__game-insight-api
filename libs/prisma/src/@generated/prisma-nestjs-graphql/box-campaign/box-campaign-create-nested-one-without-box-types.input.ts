import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateWithoutBoxTypesInput } from './box-campaign-create-without-box-types.input';
import { BoxCampaignCreateOrConnectWithoutBoxTypesInput } from './box-campaign-create-or-connect-without-box-types.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';

@InputType()
export class BoxCampaignCreateNestedOneWithoutBoxTypesInput {

    @Field(() => BoxCampaignCreateWithoutBoxTypesInput, {nullable:true})
    create?: BoxCampaignCreateWithoutBoxTypesInput;

    @Field(() => BoxCampaignCreateOrConnectWithoutBoxTypesInput, {nullable:true})
    connectOrCreate?: BoxCampaignCreateOrConnectWithoutBoxTypesInput;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:true})
    connect?: BoxCampaignWhereUniqueInput;
}
