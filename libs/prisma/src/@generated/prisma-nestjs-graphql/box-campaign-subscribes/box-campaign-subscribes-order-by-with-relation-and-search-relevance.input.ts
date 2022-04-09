import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignOrderByWithRelationAndSearchRelevanceInput } from '../box-campaign/box-campaign-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignSubscribesOrderByRelevanceInput } from './box-campaign-subscribes-order-by-relevance.input';

@InputType()
export class BoxCampaignSubscribesOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    user?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => BoxCampaignOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    box_campaign?: BoxCampaignOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BoxCampaignSubscribesOrderByRelevanceInput, {nullable:true})
    _relevance?: BoxCampaignSubscribesOrderByRelevanceInput;
}
