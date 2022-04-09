import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BoxCampaignWhitelistCountAggregate } from './box-campaign-whitelist-count-aggregate.output';
import { BoxCampaignWhitelistAvgAggregate } from './box-campaign-whitelist-avg-aggregate.output';
import { BoxCampaignWhitelistSumAggregate } from './box-campaign-whitelist-sum-aggregate.output';
import { BoxCampaignWhitelistMinAggregate } from './box-campaign-whitelist-min-aggregate.output';
import { BoxCampaignWhitelistMaxAggregate } from './box-campaign-whitelist-max-aggregate.output';

@ObjectType()
export class BoxCampaignWhitelistGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    box_campaign_uid!: string;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => BoxCampaignWhitelistCountAggregate, {nullable:true})
    _count?: BoxCampaignWhitelistCountAggregate;

    @Field(() => BoxCampaignWhitelistAvgAggregate, {nullable:true})
    _avg?: BoxCampaignWhitelistAvgAggregate;

    @Field(() => BoxCampaignWhitelistSumAggregate, {nullable:true})
    _sum?: BoxCampaignWhitelistSumAggregate;

    @Field(() => BoxCampaignWhitelistMinAggregate, {nullable:true})
    _min?: BoxCampaignWhitelistMinAggregate;

    @Field(() => BoxCampaignWhitelistMaxAggregate, {nullable:true})
    _max?: BoxCampaignWhitelistMaxAggregate;
}
