import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BoxCampaignAvgAggregate {

    @Field(() => Float, {nullable:true})
    spotlight_position?: number;
}
