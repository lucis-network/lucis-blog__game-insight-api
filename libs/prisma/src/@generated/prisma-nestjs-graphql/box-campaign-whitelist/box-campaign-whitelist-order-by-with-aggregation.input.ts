import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoxCampaignWhitelistCountOrderByAggregateInput } from './box-campaign-whitelist-count-order-by-aggregate.input';
import { BoxCampaignWhitelistAvgOrderByAggregateInput } from './box-campaign-whitelist-avg-order-by-aggregate.input';
import { BoxCampaignWhitelistMaxOrderByAggregateInput } from './box-campaign-whitelist-max-order-by-aggregate.input';
import { BoxCampaignWhitelistMinOrderByAggregateInput } from './box-campaign-whitelist-min-order-by-aggregate.input';
import { BoxCampaignWhitelistSumOrderByAggregateInput } from './box-campaign-whitelist-sum-order-by-aggregate.input';

@InputType()
export class BoxCampaignWhitelistOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    box_campaign_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BoxCampaignWhitelistCountOrderByAggregateInput, {nullable:true})
    _count?: BoxCampaignWhitelistCountOrderByAggregateInput;

    @Field(() => BoxCampaignWhitelistAvgOrderByAggregateInput, {nullable:true})
    _avg?: BoxCampaignWhitelistAvgOrderByAggregateInput;

    @Field(() => BoxCampaignWhitelistMaxOrderByAggregateInput, {nullable:true})
    _max?: BoxCampaignWhitelistMaxOrderByAggregateInput;

    @Field(() => BoxCampaignWhitelistMinOrderByAggregateInput, {nullable:true})
    _min?: BoxCampaignWhitelistMinOrderByAggregateInput;

    @Field(() => BoxCampaignWhitelistSumOrderByAggregateInput, {nullable:true})
    _sum?: BoxCampaignWhitelistSumOrderByAggregateInput;
}
