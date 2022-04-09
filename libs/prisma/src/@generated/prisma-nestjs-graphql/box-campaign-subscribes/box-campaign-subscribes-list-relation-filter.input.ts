import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereInput } from './box-campaign-subscribes-where.input';

@InputType()
export class BoxCampaignSubscribesListRelationFilter {

    @Field(() => BoxCampaignSubscribesWhereInput, {nullable:true})
    every?: BoxCampaignSubscribesWhereInput;

    @Field(() => BoxCampaignSubscribesWhereInput, {nullable:true})
    some?: BoxCampaignSubscribesWhereInput;

    @Field(() => BoxCampaignSubscribesWhereInput, {nullable:true})
    none?: BoxCampaignSubscribesWhereInput;
}
