import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoxCampaignOrderByWithRelationAndSearchRelevanceInput } from '../box-campaign/box-campaign-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignBuyHistoryOrderByRelevanceInput } from './box-campaign-buy-history-order-by-relevance.input';

@InputType()
export class BoxCampaignBuyHistoryOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => BoxCampaignOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    box?: BoxCampaignOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => BoxCampaignBuyHistoryOrderByRelevanceInput, {nullable:true})
    _relevance?: BoxCampaignBuyHistoryOrderByRelevanceInput;
}
