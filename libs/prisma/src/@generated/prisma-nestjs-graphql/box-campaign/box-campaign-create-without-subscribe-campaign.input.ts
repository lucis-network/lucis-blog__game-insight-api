import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BoxCampaignsStatus } from '../prisma/box-campaigns-status.enum';
import { PublishStatus } from '../prisma/publish-status.enum';
import { Int } from '@nestjs/graphql';
import { GameCreateNestedOneWithoutBoxCampaignsInput } from '../game/game-create-nested-one-without-box-campaigns.input';
import { BoxTypeCreateNestedManyWithoutCampaignInput } from '../box-type/box-type-create-nested-many-without-campaign.input';
import { BoxCampaignWhitelistCreateNestedManyWithoutCampaignInput } from '../box-campaign-whitelist/box-campaign-whitelist-create-nested-many-without-campaign.input';
import { BoxCampaignBuyHistoryCreateNestedManyWithoutBoxInput } from '../box-campaign-buy-history/box-campaign-buy-history-create-nested-many-without-box.input';

@InputType()
export class BoxCampaignCreateWithoutSubscribeCampaignInput {

    @Field(() => String, {nullable:true})
    uid?: string;

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

    @Field(() => GameCreateNestedOneWithoutBoxCampaignsInput, {nullable:false})
    game!: GameCreateNestedOneWithoutBoxCampaignsInput;

    @Field(() => BoxTypeCreateNestedManyWithoutCampaignInput, {nullable:true})
    boxTypes?: BoxTypeCreateNestedManyWithoutCampaignInput;

    @Field(() => BoxCampaignWhitelistCreateNestedManyWithoutCampaignInput, {nullable:true})
    whitelists?: BoxCampaignWhitelistCreateNestedManyWithoutCampaignInput;

    @Field(() => BoxCampaignBuyHistoryCreateNestedManyWithoutBoxInput, {nullable:true})
    buyHistory?: BoxCampaignBuyHistoryCreateNestedManyWithoutBoxInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
