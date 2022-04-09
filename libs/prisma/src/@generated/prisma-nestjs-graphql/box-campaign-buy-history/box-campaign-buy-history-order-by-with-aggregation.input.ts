import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoxCampaignBuyHistoryCountOrderByAggregateInput } from './box-campaign-buy-history-count-order-by-aggregate.input';
import { BoxCampaignBuyHistoryAvgOrderByAggregateInput } from './box-campaign-buy-history-avg-order-by-aggregate.input';
import { BoxCampaignBuyHistoryMaxOrderByAggregateInput } from './box-campaign-buy-history-max-order-by-aggregate.input';
import { BoxCampaignBuyHistoryMinOrderByAggregateInput } from './box-campaign-buy-history-min-order-by-aggregate.input';
import { BoxCampaignBuyHistorySumOrderByAggregateInput } from './box-campaign-buy-history-sum-order-by-aggregate.input';

@InputType()
export class BoxCampaignBuyHistoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    box_campaign_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    round?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    box_price_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    box_type_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tx_hash?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    box_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BoxCampaignBuyHistoryCountOrderByAggregateInput, {nullable:true})
    _count?: BoxCampaignBuyHistoryCountOrderByAggregateInput;

    @Field(() => BoxCampaignBuyHistoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: BoxCampaignBuyHistoryAvgOrderByAggregateInput;

    @Field(() => BoxCampaignBuyHistoryMaxOrderByAggregateInput, {nullable:true})
    _max?: BoxCampaignBuyHistoryMaxOrderByAggregateInput;

    @Field(() => BoxCampaignBuyHistoryMinOrderByAggregateInput, {nullable:true})
    _min?: BoxCampaignBuyHistoryMinOrderByAggregateInput;

    @Field(() => BoxCampaignBuyHistorySumOrderByAggregateInput, {nullable:true})
    _sum?: BoxCampaignBuyHistorySumOrderByAggregateInput;
}
