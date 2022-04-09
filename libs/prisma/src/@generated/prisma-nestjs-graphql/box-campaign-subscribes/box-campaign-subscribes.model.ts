import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';
import { BoxCampaign } from '../box-campaign/box-campaign.model';

@ObjectType()
export class BoxCampaignSubscribes {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:false})
    box_campaign_uid!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    round!: any | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    finish!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    enable_notify!: boolean;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => BoxCampaign, {nullable:false})
    box_campaign?: BoxCampaign;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
