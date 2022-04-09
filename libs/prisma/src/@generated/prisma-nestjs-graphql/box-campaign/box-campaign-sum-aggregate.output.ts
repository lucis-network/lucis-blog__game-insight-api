import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BoxCampaignSumAggregate {

    @Field(() => Int, {nullable:true})
    spotlight_position?: number;
}
