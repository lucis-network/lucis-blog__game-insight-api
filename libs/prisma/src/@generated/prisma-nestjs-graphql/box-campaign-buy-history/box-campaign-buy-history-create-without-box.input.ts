import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BoxCampaignBuyHistoriesStatus } from '../prisma/box-campaign-buy-histories-status.enum';

@InputType()
export class BoxCampaignBuyHistoryCreateWithoutBoxInput {

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => GraphQLJSON, {nullable:true})
    round?: any;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:false})
    box_price_uid!: string;

    @Field(() => String, {nullable:false})
    box_type_uid!: string;

    @Field(() => String, {nullable:true})
    tx_hash?: string;

    @Field(() => BoxCampaignBuyHistoriesStatus, {nullable:true})
    status?: keyof typeof BoxCampaignBuyHistoriesStatus;

    @Field(() => GraphQLJSON, {nullable:true})
    box_price?: any;

    @Field(() => String, {nullable:true})
    data?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
