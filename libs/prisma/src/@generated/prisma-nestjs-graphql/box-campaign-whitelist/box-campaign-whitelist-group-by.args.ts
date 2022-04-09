import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignWhitelistWhereInput } from './box-campaign-whitelist-where.input';
import { BoxCampaignWhitelistOrderByWithAggregationInput } from './box-campaign-whitelist-order-by-with-aggregation.input';
import { BoxCampaignWhitelistScalarFieldEnum } from './box-campaign-whitelist-scalar-field.enum';
import { BoxCampaignWhitelistScalarWhereWithAggregatesInput } from './box-campaign-whitelist-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BoxCampaignWhitelistCountAggregateInput } from './box-campaign-whitelist-count-aggregate.input';
import { BoxCampaignWhitelistAvgAggregateInput } from './box-campaign-whitelist-avg-aggregate.input';
import { BoxCampaignWhitelistSumAggregateInput } from './box-campaign-whitelist-sum-aggregate.input';
import { BoxCampaignWhitelistMinAggregateInput } from './box-campaign-whitelist-min-aggregate.input';
import { BoxCampaignWhitelistMaxAggregateInput } from './box-campaign-whitelist-max-aggregate.input';

@ArgsType()
export class BoxCampaignWhitelistGroupByArgs {

    @Field(() => BoxCampaignWhitelistWhereInput, {nullable:true})
    where?: BoxCampaignWhitelistWhereInput;

    @Field(() => [BoxCampaignWhitelistOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BoxCampaignWhitelistOrderByWithAggregationInput>;

    @Field(() => [BoxCampaignWhitelistScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BoxCampaignWhitelistScalarFieldEnum>;

    @Field(() => BoxCampaignWhitelistScalarWhereWithAggregatesInput, {nullable:true})
    having?: BoxCampaignWhitelistScalarWhereWithAggregatesInput;

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
