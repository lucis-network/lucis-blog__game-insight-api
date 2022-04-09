import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BoxCampaignsStatus } from '../prisma/box-campaigns-status.enum';
import { PublishStatus } from '../prisma/publish-status.enum';
import { Int } from '@nestjs/graphql';
import { BoxCampaignSubscribesUncheckedCreateNestedManyWithoutBox_campaignInput } from '../box-campaign-subscribes/box-campaign-subscribes-unchecked-create-nested-many-without-box-campaign.input';
import { BoxTypeUncheckedCreateNestedManyWithoutCampaignInput } from '../box-type/box-type-unchecked-create-nested-many-without-campaign.input';
import { BoxCampaignWhitelistUncheckedCreateNestedManyWithoutCampaignInput } from '../box-campaign-whitelist/box-campaign-whitelist-unchecked-create-nested-many-without-campaign.input';
import { BoxCampaignBuyHistoryUncheckedCreateNestedManyWithoutBoxInput } from '../box-campaign-buy-history/box-campaign-buy-history-unchecked-create-nested-many-without-box.input';

@InputType()
export class BoxCampaignUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    uid?: string;

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

    @Field(() => Date, {nullable:true})
    opening_at?: Date | string;

    @Field(() => Date, {nullable:true})
    start?: Date | string;

    @Field(() => Date, {nullable:true})
    end?: Date | string;

    @Field(() => String, {nullable:true})
    highlight?: string;

    @Field(() => Int, {nullable:true})
    spotlight_position?: number;

    @Field(() => BoxCampaignSubscribesUncheckedCreateNestedManyWithoutBox_campaignInput, {nullable:true})
    subscribeCampaign?: BoxCampaignSubscribesUncheckedCreateNestedManyWithoutBox_campaignInput;

    @Field(() => BoxTypeUncheckedCreateNestedManyWithoutCampaignInput, {nullable:true})
    boxTypes?: BoxTypeUncheckedCreateNestedManyWithoutCampaignInput;

    @Field(() => BoxCampaignWhitelistUncheckedCreateNestedManyWithoutCampaignInput, {nullable:true})
    whitelists?: BoxCampaignWhitelistUncheckedCreateNestedManyWithoutCampaignInput;

    @Field(() => BoxCampaignBuyHistoryUncheckedCreateNestedManyWithoutBoxInput, {nullable:true})
    buyHistory?: BoxCampaignBuyHistoryUncheckedCreateNestedManyWithoutBoxInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
