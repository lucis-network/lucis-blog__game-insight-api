import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoxCampaignSubscribesCountOrderByAggregateInput } from './box-campaign-subscribes-count-order-by-aggregate.input';
import { BoxCampaignSubscribesAvgOrderByAggregateInput } from './box-campaign-subscribes-avg-order-by-aggregate.input';
import { BoxCampaignSubscribesMaxOrderByAggregateInput } from './box-campaign-subscribes-max-order-by-aggregate.input';
import { BoxCampaignSubscribesMinOrderByAggregateInput } from './box-campaign-subscribes-min-order-by-aggregate.input';
import { BoxCampaignSubscribesSumOrderByAggregateInput } from './box-campaign-subscribes-sum-order-by-aggregate.input';

@InputType()
export class BoxCampaignSubscribesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    box_campaign_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    round?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    finish?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enable_notify?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BoxCampaignSubscribesCountOrderByAggregateInput, {nullable:true})
    _count?: BoxCampaignSubscribesCountOrderByAggregateInput;

    @Field(() => BoxCampaignSubscribesAvgOrderByAggregateInput, {nullable:true})
    _avg?: BoxCampaignSubscribesAvgOrderByAggregateInput;

    @Field(() => BoxCampaignSubscribesMaxOrderByAggregateInput, {nullable:true})
    _max?: BoxCampaignSubscribesMaxOrderByAggregateInput;

    @Field(() => BoxCampaignSubscribesMinOrderByAggregateInput, {nullable:true})
    _min?: BoxCampaignSubscribesMinOrderByAggregateInput;

    @Field(() => BoxCampaignSubscribesSumOrderByAggregateInput, {nullable:true})
    _sum?: BoxCampaignSubscribesSumOrderByAggregateInput;
}
