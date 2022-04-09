import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BoxCampaignOrderByWithRelationAndSearchRelevanceInput } from '../box-campaign/box-campaign-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignWhitelistOrderByRelevanceInput } from './box-campaign-whitelist-order-by-relevance.input';

@InputType()
export class BoxCampaignWhitelistOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    box_campaign_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => BoxCampaignOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    campaign?: BoxCampaignOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BoxCampaignWhitelistOrderByRelevanceInput, {nullable:true})
    _relevance?: BoxCampaignWhitelistOrderByRelevanceInput;
}