import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhereInput } from './box-campaign-where.input';

@InputType()
export class BoxCampaignListRelationFilter {

    @Field(() => BoxCampaignWhereInput, {nullable:true})
    every?: BoxCampaignWhereInput;

    @Field(() => BoxCampaignWhereInput, {nullable:true})
    some?: BoxCampaignWhereInput;

    @Field(() => BoxCampaignWhereInput, {nullable:true})
    none?: BoxCampaignWhereInput;
}
