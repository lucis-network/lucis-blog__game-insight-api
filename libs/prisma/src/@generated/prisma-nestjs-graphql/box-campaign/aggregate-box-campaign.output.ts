import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BoxCampaignCountAggregate } from './box-campaign-count-aggregate.output';
import { BoxCampaignAvgAggregate } from './box-campaign-avg-aggregate.output';
import { BoxCampaignSumAggregate } from './box-campaign-sum-aggregate.output';
import { BoxCampaignMinAggregate } from './box-campaign-min-aggregate.output';
import { BoxCampaignMaxAggregate } from './box-campaign-max-aggregate.output';

@ObjectType()
export class AggregateBoxCampaign {

    @Field(() => BoxCampaignCountAggregate, {nullable:true})
    _count?: BoxCampaignCountAggregate;

    @Field(() => BoxCampaignAvgAggregate, {nullable:true})
    _avg?: BoxCampaignAvgAggregate;

    @Field(() => BoxCampaignSumAggregate, {nullable:true})
    _sum?: BoxCampaignSumAggregate;

    @Field(() => BoxCampaignMinAggregate, {nullable:true})
    _min?: BoxCampaignMinAggregate;

    @Field(() => BoxCampaignMaxAggregate, {nullable:true})
    _max?: BoxCampaignMaxAggregate;
}
