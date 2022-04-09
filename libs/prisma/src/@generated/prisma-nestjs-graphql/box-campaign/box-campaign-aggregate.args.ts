import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhereInput } from './box-campaign-where.input';
import { BoxCampaignOrderByWithRelationAndSearchRelevanceInput } from './box-campaign-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignWhereUniqueInput } from './box-campaign-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxCampaignCountAggregateInput } from './box-campaign-count-aggregate.input';
import { BoxCampaignAvgAggregateInput } from './box-campaign-avg-aggregate.input';
import { BoxCampaignSumAggregateInput } from './box-campaign-sum-aggregate.input';
import { BoxCampaignMinAggregateInput } from './box-campaign-min-aggregate.input';
import { BoxCampaignMaxAggregateInput } from './box-campaign-max-aggregate.input';

@ArgsType()
export class BoxCampaignAggregateArgs {

    @Field(() => BoxCampaignWhereInput, {nullable:true})
    where?: BoxCampaignWhereInput;

    @Field(() => [BoxCampaignOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BoxCampaignOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BoxCampaignWhereUniqueInput, {nullable:true})
    cursor?: BoxCampaignWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BoxCampaignCountAggregateInput, {nullable:true})
    _count?: BoxCampaignCountAggregateInput;

    @Field(() => BoxCampaignAvgAggregateInput, {nullable:true})
    _avg?: BoxCampaignAvgAggregateInput;

    @Field(() => BoxCampaignSumAggregateInput, {nullable:true})
    _sum?: BoxCampaignSumAggregateInput;

    @Field(() => BoxCampaignMinAggregateInput, {nullable:true})
    _min?: BoxCampaignMinAggregateInput;

    @Field(() => BoxCampaignMaxAggregateInput, {nullable:true})
    _max?: BoxCampaignMaxAggregateInput;
}
