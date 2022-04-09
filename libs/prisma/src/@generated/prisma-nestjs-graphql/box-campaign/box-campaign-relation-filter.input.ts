import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignWhereInput } from './box-campaign-where.input';

@InputType()
export class BoxCampaignRelationFilter {

    @Field(() => BoxCampaignWhereInput, {nullable:true})
    is?: BoxCampaignWhereInput;

    @Field(() => BoxCampaignWhereInput, {nullable:true})
    isNot?: BoxCampaignWhereInput;
}
