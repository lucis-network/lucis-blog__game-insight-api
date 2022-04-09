import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryWhereInput } from './box-campaign-buy-history-where.input';
import { BoxCampaignBuyHistoryOrderByWithAggregationInput } from './box-campaign-buy-history-order-by-with-aggregation.input';
import { BoxCampaignBuyHistoryScalarFieldEnum } from './box-campaign-buy-history-scalar-field.enum';
import { BoxCampaignBuyHistoryScalarWhereWithAggregatesInput } from './box-campaign-buy-history-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BoxCampaignBuyHistoryCountAggregateInput } from './box-campaign-buy-history-count-aggregate.input';
import { BoxCampaignBuyHistoryAvgAggregateInput } from './box-campaign-buy-history-avg-aggregate.input';
import { BoxCampaignBuyHistorySumAggregateInput } from './box-campaign-buy-history-sum-aggregate.input';
import { BoxCampaignBuyHistoryMinAggregateInput } from './box-campaign-buy-history-min-aggregate.input';
import { BoxCampaignBuyHistoryMaxAggregateInput } from './box-campaign-buy-history-max-aggregate.input';

@ArgsType()
export class BoxCampaignBuyHistoryGroupByArgs {

    @Field(() => BoxCampaignBuyHistoryWhereInput, {nullable:true})
    where?: BoxCampaignBuyHistoryWhereInput;

    @Field(() => [BoxCampaignBuyHistoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BoxCampaignBuyHistoryOrderByWithAggregationInput>;

    @Field(() => [BoxCampaignBuyHistoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BoxCampaignBuyHistoryScalarFieldEnum>;

    @Field(() => BoxCampaignBuyHistoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: BoxCampaignBuyHistoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BoxCampaignBuyHistoryCountAggregateInput, {nullable:true})
    _count?: BoxCampaignBuyHistoryCountAggregateInput;

    @Field(() => BoxCampaignBuyHistoryAvgAggregateInput, {nullable:true})
    _avg?: BoxCampaignBuyHistoryAvgAggregateInput;

    @Field(() => BoxCampaignBuyHistorySumAggregateInput, {nullable:true})
    _sum?: BoxCampaignBuyHistorySumAggregateInput;

    @Field(() => BoxCampaignBuyHistoryMinAggregateInput, {nullable:true})
    _min?: BoxCampaignBuyHistoryMinAggregateInput;

    @Field(() => BoxCampaignBuyHistoryMaxAggregateInput, {nullable:true})
    _max?: BoxCampaignBuyHistoryMaxAggregateInput;
}
