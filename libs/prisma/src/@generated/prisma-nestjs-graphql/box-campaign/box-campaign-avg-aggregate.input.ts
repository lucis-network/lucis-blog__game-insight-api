import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BoxCampaignAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    spotlight_position?: true;
}
