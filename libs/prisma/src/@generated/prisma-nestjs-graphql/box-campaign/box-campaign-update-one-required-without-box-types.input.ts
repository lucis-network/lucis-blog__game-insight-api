import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignCreateWithoutBoxTypesInput } from './box-campaign-create-without-box-types.input';
import { BoxCampaignCreateOrConnectWithoutBoxTypesInput } from './box-campaign-create-or-connect-without-box-types.input';
import { BoxCampaignUpsertWithoutBoxTypesInput } from './box-campaign-upsert-without-box-types.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { BoxCampaignUpdateWithoutBoxTypesInput } from './box-campaign-update-without-box-types.input';

@InputType()
export class BoxCampaignUpdateOneRequiredWithoutBoxTypesInput {

    @Field(() => BoxCampaignCreateWithoutBoxTypesInput, {nullable:true})
    create?: BoxCampaignCreateWithoutBoxTypesInput;

    @Field(() => BoxCampaignCreateOrConnectWithoutBoxTypesInput, {nullable:true})
    connectOrCreate?: BoxCampaignCreateOrConnectWithoutBoxTypesInput;

    @Field(() => BoxCampaignUpsertWithoutBoxTypesInput, {nullable:true})
    upsert?: BoxCampaignUpsertWithoutBoxTypesInput;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:true})
    connect?: BoxCampaignWhereUniqueInput;

    @Field(() => BoxCampaignUpdateWithoutBoxTypesInput, {nullable:true})
    update?: BoxCampaignUpdateWithoutBoxTypesInput;
}
