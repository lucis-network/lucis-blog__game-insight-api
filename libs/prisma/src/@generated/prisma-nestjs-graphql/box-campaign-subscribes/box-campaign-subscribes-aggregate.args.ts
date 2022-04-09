import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereInput } from './box-campaign-subscribes-where.input';
import { BoxCampaignSubscribesOrderByWithRelationAndSearchRelevanceInput } from './box-campaign-subscribes-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignSubscribesWhereUniqueInput } from './box-campaign-subscribes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxCampaignSubscribesCountAggregateInput } from './box-campaign-subscribes-count-aggregate.input';
import { BoxCampaignSubscribesAvgAggregateInput } from './box-campaign-subscribes-avg-aggregate.input';
import { BoxCampaignSubscribesSumAggregateInput } from './box-campaign-subscribes-sum-aggregate.input';
import { BoxCampaignSubscribesMinAggregateInput } from './box-campaign-subscribes-min-aggregate.input';
import { BoxCampaignSubscribesMaxAggregateInput } from './box-campaign-subscribes-max-aggregate.input';

@ArgsType()
export class BoxCampaignSubscribesAggregateArgs {

    @Field(() => BoxCampaignSubscribesWhereInput, {nullable:true})
    where?: BoxCampaignSubscribesWhereInput;

    @Field(() => [BoxCampaignSubscribesOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BoxCampaignSubscribesOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BoxCampaignSubscribesWhereUniqueInput, {nullable:true})
    cursor?: BoxCampaignSubscribesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BoxCampaignSubscribesCountAggregateInput, {nullable:true})
    _count?: BoxCampaignSubscribesCountAggregateInput;

    @Field(() => BoxCampaignSubscribesAvgAggregateInput, {nullable:true})
    _avg?: BoxCampaignSubscribesAvgAggregateInput;

    @Field(() => BoxCampaignSubscribesSumAggregateInput, {nullable:true})
    _sum?: BoxCampaignSubscribesSumAggregateInput;

    @Field(() => BoxCampaignSubscribesMinAggregateInput, {nullable:true})
    _min?: BoxCampaignSubscribesMinAggregateInput;

    @Field(() => BoxCampaignSubscribesMaxAggregateInput, {nullable:true})
    _max?: BoxCampaignSubscribesMaxAggregateInput;
}
