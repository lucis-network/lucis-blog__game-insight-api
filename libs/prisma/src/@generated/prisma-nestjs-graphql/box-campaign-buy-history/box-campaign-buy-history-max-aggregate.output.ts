import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BoxCampaignBuyHistoriesStatus } from '../prisma/box-campaign-buy-histories-status.enum';

@ObjectType()
export class BoxCampaignBuyHistoryMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => String, {nullable:true})
    box_campaign_uid?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    box_price_uid?: string;

    @Field(() => String, {nullable:true})
    box_type_uid?: string;

    @Field(() => String, {nullable:true})
    tx_hash?: string;

    @Field(() => BoxCampaignBuyHistoriesStatus, {nullable:true})
    status?: keyof typeof BoxCampaignBuyHistoriesStatus;

    @Field(() => String, {nullable:true})
    data?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
