import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BoxCampaignBuyHistoriesStatus } from '../prisma/box-campaign-buy-histories-status.enum';
import { BoxCampaign } from '../box-campaign/box-campaign.model';

@ObjectType()
export class BoxCampaignBuyHistory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:false})
    box_campaign_uid!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    round!: any | null;

    @Field(() => Int, {nullable:true})
    quantity!: number | null;

    @Field(() => String, {nullable:false})
    box_price_uid!: string;

    @Field(() => String, {nullable:false})
    box_type_uid!: string;

    @Field(() => String, {nullable:true})
    tx_hash!: string | null;

    @Field(() => BoxCampaignBuyHistoriesStatus, {nullable:false,defaultValue:'PENDING'})
    status!: keyof typeof BoxCampaignBuyHistoriesStatus;

    @Field(() => GraphQLJSON, {nullable:true})
    box_price!: any | null;

    @Field(() => String, {nullable:true})
    data!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => BoxCampaign, {nullable:false})
    box?: BoxCampaign;
}
