import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BoxCampaign } from '../box-campaign/box-campaign.model';

@ObjectType()
export class BoxCampaignWhitelist {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    box_campaign_uid!: string;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => BoxCampaign, {nullable:false})
    campaign?: BoxCampaign;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
