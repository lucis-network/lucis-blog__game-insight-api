import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameOrderByWithRelationAndSearchRelevanceInput } from '../game/game-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignSubscribesOrderByRelationAggregateInput } from '../box-campaign-subscribes/box-campaign-subscribes-order-by-relation-aggregate.input';
import { BoxTypeOrderByRelationAggregateInput } from '../box-type/box-type-order-by-relation-aggregate.input';
import { BoxCampaignWhitelistOrderByRelationAggregateInput } from '../box-campaign-whitelist/box-campaign-whitelist-order-by-relation-aggregate.input';
import { BoxCampaignBuyHistoryOrderByRelationAggregateInput } from '../box-campaign-buy-history/box-campaign-buy-history-order-by-relation-aggregate.input';
import { BoxCampaignOrderByRelevanceInput } from './box-campaign-order-by-relevance.input';

@InputType()
export class BoxCampaignOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    desc?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rules?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cover_img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banner_img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rounds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    publish_status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    opening_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    start?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    end?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    highlight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    spotlight_position?: keyof typeof SortOrder;

    @Field(() => GameOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    game?: GameOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => BoxCampaignSubscribesOrderByRelationAggregateInput, {nullable:true})
    subscribeCampaign?: BoxCampaignSubscribesOrderByRelationAggregateInput;

    @Field(() => BoxTypeOrderByRelationAggregateInput, {nullable:true})
    boxTypes?: BoxTypeOrderByRelationAggregateInput;

    @Field(() => BoxCampaignWhitelistOrderByRelationAggregateInput, {nullable:true})
    whitelists?: BoxCampaignWhitelistOrderByRelationAggregateInput;

    @Field(() => BoxCampaignBuyHistoryOrderByRelationAggregateInput, {nullable:true})
    buyHistory?: BoxCampaignBuyHistoryOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => BoxCampaignOrderByRelevanceInput, {nullable:true})
    _relevance?: BoxCampaignOrderByRelevanceInput;
}
