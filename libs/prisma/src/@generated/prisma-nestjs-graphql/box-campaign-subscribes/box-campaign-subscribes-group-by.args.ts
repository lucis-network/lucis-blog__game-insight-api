import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxCampaignSubscribesWhereInput } from './box-campaign-subscribes-where.input';
import { BoxCampaignSubscribesOrderByWithAggregationInput } from './box-campaign-subscribes-order-by-with-aggregation.input';
import { BoxCampaignSubscribesScalarFieldEnum } from './box-campaign-subscribes-scalar-field.enum';
import { BoxCampaignSubscribesScalarWhereWithAggregatesInput } from './box-campaign-subscribes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BoxCampaignSubscribesCountAggregateInput } from './box-campaign-subscribes-count-aggregate.input';
import { BoxCampaignSubscribesAvgAggregateInput } from './box-campaign-subscribes-avg-aggregate.input';
import { BoxCampaignSubscribesSumAggregateInput } from './box-campaign-subscribes-sum-aggregate.input';
import { BoxCampaignSubscribesMinAggregateInput } from './box-campaign-subscribes-min-aggregate.input';
import { BoxCampaignSubscribesMaxAggregateInput } from './box-campaign-subscribes-max-aggregate.input';

@ArgsType()
export class BoxCampaignSubscribesGroupByArgs {

    @Field(() => BoxCampaignSubscribesWhereInput, {nullable:true})
    where?: BoxCampaignSubscribesWhereInput;

    @Field(() => [BoxCampaignSubscribesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BoxCampaignSubscribesOrderByWithAggregationInput>;

    @Field(() => [BoxCampaignSubscribesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BoxCampaignSubscribesScalarFieldEnum>;

    @Field(() => BoxCampaignSubscribesScalarWhereWithAggregatesInput, {nullable:true})
    having?: BoxCampaignSubscribesScalarWhereWithAggregatesInput;

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
