import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoxPriceOrderByRelationAggregateInput } from '../box-price/box-price-order-by-relation-aggregate.input';
import { BoxCampaignOrderByWithRelationAndSearchRelevanceInput } from '../box-campaign/box-campaign-order-by-with-relation-and-search-relevance.input';
import { BoxTypeOrderByRelevanceInput } from './box-type-order-by-relevance.input';

@InputType()
export class BoxTypeOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    box_campaign_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    desc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sold_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    thumb_img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    series_content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    limit_per_user?: keyof typeof SortOrder;

    @Field(() => BoxPriceOrderByRelationAggregateInput, {nullable:true})
    prices?: BoxPriceOrderByRelationAggregateInput;

    @Field(() => BoxCampaignOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    campaign?: BoxCampaignOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BoxTypeOrderByRelevanceInput, {nullable:true})
    _relevance?: BoxTypeOrderByRelevanceInput;
}
