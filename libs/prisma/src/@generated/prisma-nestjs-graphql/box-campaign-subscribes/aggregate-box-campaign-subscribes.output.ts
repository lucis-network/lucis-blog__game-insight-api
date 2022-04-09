import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BoxCampaignSubscribesCountAggregate } from './box-campaign-subscribes-count-aggregate.output';
import { BoxCampaignSubscribesAvgAggregate } from './box-campaign-subscribes-avg-aggregate.output';
import { BoxCampaignSubscribesSumAggregate } from './box-campaign-subscribes-sum-aggregate.output';
import { BoxCampaignSubscribesMinAggregate } from './box-campaign-subscribes-min-aggregate.output';
import { BoxCampaignSubscribesMaxAggregate } from './box-campaign-subscribes-max-aggregate.output';

@ObjectType()
export class AggregateBoxCampaignSubscribes {

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
