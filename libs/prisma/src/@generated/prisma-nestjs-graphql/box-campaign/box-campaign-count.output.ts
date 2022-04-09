import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BoxCampaignCount {

    @Field(() => Int, {nullable:false})
    subscribeCampaign!: number;

    @Field(() => Int, {nullable:false})
    boxTypes!: number;

    @Field(() => Int, {nullable:false})
    whitelists!: number;

    @Field(() => Int, {nullable:false})
    buyHistory!: number;
}
