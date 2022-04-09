import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BoxCampaignsStatus } from '../prisma/box-campaigns-status.enum';
import { PublishStatus } from '../prisma/publish-status.enum';
import { Int } from '@nestjs/graphql';
import { BoxCampaignCountAggregate } from './box-campaign-count-aggregate.output';
import { BoxCampaignAvgAggregate } from './box-campaign-avg-aggregate.output';
import { BoxCampaignSumAggregate } from './box-campaign-sum-aggregate.output';
import { BoxCampaignMinAggregate } from './box-campaign-min-aggregate.output';
import { BoxCampaignMaxAggregate } from './box-campaign-max-aggregate.output';

@ObjectType()
export class BoxCampaignGroupBy {

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    game_uid!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    desc?: string;

    @Field(() => String, {nullable:true})
    rules?: string;

    @Field(() => String, {nullable:true})
    cover_img?: string;

    @Field(() => String, {nullable:true})
    banner_img?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    rounds?: any;

    @Field(() => BoxCampaignsStatus, {nullable:true})
    status?: keyof typeof BoxCampaignsStatus;

    @Field(() => PublishStatus, {nullable:true})
    publish_status?: keyof typeof PublishStatus;

    @Field(() => Date, {nullable:false})
    opening_at!: Date | string;

    @Field(() => Date, {nullable:false})
    start!: Date | string;

    @Field(() => Date, {nullable:false})
    end!: Date | string;

    @Field(() => String, {nullable:true})
    highlight?: string;

    @Field(() => Int, {nullable:true})
    spotlight_position?: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => BoxCampaignCountAggregate, {nullable:true})
    _count?: BoxCampaignCountAggregate;

    @Field(() => BoxCampaignAvgAggregate, {nullable:true})
    _avg?: BoxCampaignAvgAggregate;

    @Field(() => BoxCampaignSumAggregate, {nullable:true})
    _sum?: BoxCampaignSumAggregate;

    @Field(() => BoxCampaignMinAggregate, {nullable:true})
    _min?: BoxCampaignMinAggregate;

    @Field(() => BoxCampaignMaxAggregate, {nullable:true})
    _max?: BoxCampaignMaxAggregate;
}
