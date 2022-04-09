import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhitelistWhereInput } from './box-campaign-whitelist-where.input';
import { BoxCampaignWhitelistOrderByWithRelationAndSearchRelevanceInput } from './box-campaign-whitelist-order-by-with-relation-and-search-relevance.input';
import { BoxCampaignWhitelistWhereUniqueInput } from './box-campaign-whitelist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxCampaignWhitelistCountAggregateInput } from './box-campaign-whitelist-count-aggregate.input';
import { BoxCampaignWhitelistAvgAggregateInput } from './box-campaign-whitelist-avg-aggregate.input';
import { BoxCampaignWhitelistSumAggregateInput } from './box-campaign-whitelist-sum-aggregate.input';
import { BoxCampaignWhitelistMinAggregateInput } from './box-campaign-whitelist-min-aggregate.input';
import { BoxCampaignWhitelistMaxAggregateInput } from './box-campaign-whitelist-max-aggregate.input';

@ArgsType()
export class BoxCampaignWhitelistAggregateArgs {

    @Field(() => BoxCampaignWhitelistWhereInput, {nullable:true})
    where?: BoxCampaignWhitelistWhereInput;

    @Field(() => [BoxCampaignWhitelistOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BoxCampaignWhitelistOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BoxCampaignWhitelistWhereUniqueInput, {nullable:true})
    cursor?: BoxCampaignWhitelistWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BoxCampaignWhitelistCountAggregateInput, {nullable:true})
    _count?: BoxCampaignWhitelistCountAggregateInput;

    @Field(() => BoxCampaignWhitelistAvgAggregateInput, {nullable:true})
    _avg?: BoxCampaignWhitelistAvgAggregateInput;

    @Field(() => BoxCampaignWhitelistSumAggregateInput, {nullable:true})
    _sum?: BoxCampaignWhitelistSumAggregateInput;

    @Field(() => BoxCampaignWhitelistMinAggregateInput, {nullable:true})
    _min?: BoxCampaignWhitelistMinAggregateInput;

    @Field(() => BoxCampaignWhitelistMaxAggregateInput, {nullable:true})
    _max?: BoxCampaignWhitelistMaxAggregateInput;
}
