import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryCountAggregate } from './box-campaign-buy-history-count-aggregate.output';
import { BoxCampaignBuyHistoryAvgAggregate } from './box-campaign-buy-history-avg-aggregate.output';
import { BoxCampaignBuyHistorySumAggregate } from './box-campaign-buy-history-sum-aggregate.output';
import { BoxCampaignBuyHistoryMinAggregate } from './box-campaign-buy-history-min-aggregate.output';
import { BoxCampaignBuyHistoryMaxAggregate } from './box-campaign-buy-history-max-aggregate.output';

@ObjectType()
export class AggregateBoxCampaignBuyHistory {

    @Field(() => BoxCampaignBuyHistoryCountAggregate, {nullable:true})
    _count?: BoxCampaignBuyHistoryCountAggregate;

    @Field(() => BoxCampaignBuyHistoryAvgAggregate, {nullable:true})
    _avg?: BoxCampaignBuyHistoryAvgAggregate;

    @Field(() => BoxCampaignBuyHistorySumAggregate, {nullable:true})
    _sum?: BoxCampaignBuyHistorySumAggregate;

    @Field(() => BoxCampaignBuyHistoryMinAggregate, {nullable:true})
    _min?: BoxCampaignBuyHistoryMinAggregate;

    @Field(() => BoxCampaignBuyHistoryMaxAggregate, {nullable:true})
    _max?: BoxCampaignBuyHistoryMaxAggregate;
}
