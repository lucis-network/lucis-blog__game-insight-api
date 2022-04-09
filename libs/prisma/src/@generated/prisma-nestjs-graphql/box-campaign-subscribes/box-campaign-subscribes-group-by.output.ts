import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BoxCampaignSubscribesCountAggregate } from './box-campaign-subscribes-count-aggregate.output';
import { BoxCampaignSubscribesAvgAggregate } from './box-campaign-subscribes-avg-aggregate.output';
import { BoxCampaignSubscribesSumAggregate } from './box-campaign-subscribes-sum-aggregate.output';
import { BoxCampaignSubscribesMinAggregate } from './box-campaign-subscribes-min-aggregate.output';
import { BoxCampaignSubscribesMaxAggregate } from './box-campaign-subscribes-max-aggregate.output';

@ObjectType()
export class BoxCampaignSubscribesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:false})
    box_campaign_uid!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    round?: any;

    @Field(() => Boolean, {nullable:false})
    finish!: boolean;

    @Field(() => Boolean, {nullable:false})
    enable_notify!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => BoxCampaignSubscribesCountAggregate, {nullable:true})
    _count?: BoxCampaignSubscribesCountAggregate;

    @Field(() => BoxCampaignSubscribesAvgAggregate, {nullable:true})
    _avg?: BoxCampaignSubscribesAvgAggregate;

    @Field(() => BoxCampaignSubscribesSumAggregate, {nullable:true})
    _sum?: BoxCampaignSubscribesSumAggregate;

    @Field(() => BoxCampaignSubscribesMinAggregate, {nullable:true})
    _min?: BoxCampaignSubscribesMinAggregate;

    @Field(() => BoxCampaignSubscribesMaxAggregate, {nullable:true})
    _max?: BoxCampaignSubscribesMaxAggregate;
}
