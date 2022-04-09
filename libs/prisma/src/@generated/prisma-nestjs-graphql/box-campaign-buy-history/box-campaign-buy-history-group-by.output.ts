import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BoxCampaignBuyHistoriesStatus } from '../prisma/box-campaign-buy-histories-status.enum';
import { BoxCampaignBuyHistoryCountAggregate } from './box-campaign-buy-history-count-aggregate.output';
import { BoxCampaignBuyHistoryAvgAggregate } from './box-campaign-buy-history-avg-aggregate.output';
import { BoxCampaignBuyHistorySumAggregate } from './box-campaign-buy-history-sum-aggregate.output';
import { BoxCampaignBuyHistoryMinAggregate } from './box-campaign-buy-history-min-aggregate.output';
import { BoxCampaignBuyHistoryMaxAggregate } from './box-campaign-buy-history-max-aggregate.output';

@ObjectType()
export class BoxCampaignBuyHistoryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:false})
    box_campaign_uid!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    round?: any;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:false})
    box_price_uid!: string;

    @Field(() => String, {nullable:false})
    box_type_uid!: string;

    @Field(() => String, {nullable:true})
    tx_hash?: string;

    @Field(() => BoxCampaignBuyHistoriesStatus, {nullable:false})
    status!: keyof typeof BoxCampaignBuyHistoriesStatus;

    @Field(() => GraphQLJSON, {nullable:true})
    box_price?: any;

    @Field(() => String, {nullable:true})
    data?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

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
