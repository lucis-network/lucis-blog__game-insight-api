import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableEnumBoxCampaignsStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-box-campaigns-status-field-update-operations.input';
import { NullableEnumPublishStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-publish-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GameUpdateOneRequiredWithoutBoxCampaignsInput } from '../game/game-update-one-required-without-box-campaigns.input';
import { BoxCampaignSubscribesUpdateManyWithoutBox_campaignInput } from '../box-campaign-subscribes/box-campaign-subscribes-update-many-without-box-campaign.input';
import { BoxTypeUpdateManyWithoutCampaignInput } from '../box-type/box-type-update-many-without-campaign.input';
import { BoxCampaignWhitelistUpdateManyWithoutCampaignInput } from '../box-campaign-whitelist/box-campaign-whitelist-update-many-without-campaign.input';
import { BoxCampaignBuyHistoryUpdateManyWithoutBoxInput } from '../box-campaign-buy-history/box-campaign-buy-history-update-many-without-box.input';

@InputType()
export class BoxCampaignUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uid?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    desc?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    rules?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    cover_img?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner_img?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    rounds?: any;

    @Field(() => NullableEnumBoxCampaignsStatusFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumBoxCampaignsStatusFieldUpdateOperationsInput;

    @Field(() => NullableEnumPublishStatusFieldUpdateOperationsInput, {nullable:true})
    publish_status?: NullableEnumPublishStatusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    opening_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    start?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    end?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    highlight?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    spotlight_position?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GameUpdateOneRequiredWithoutBoxCampaignsInput, {nullable:true})
    game?: GameUpdateOneRequiredWithoutBoxCampaignsInput;

    @Field(() => BoxCampaignSubscribesUpdateManyWithoutBox_campaignInput, {nullable:true})
    subscribeCampaign?: BoxCampaignSubscribesUpdateManyWithoutBox_campaignInput;

    @Field(() => BoxTypeUpdateManyWithoutCampaignInput, {nullable:true})
    boxTypes?: BoxTypeUpdateManyWithoutCampaignInput;

    @Field(() => BoxCampaignWhitelistUpdateManyWithoutCampaignInput, {nullable:true})
    whitelists?: BoxCampaignWhitelistUpdateManyWithoutCampaignInput;

    @Field(() => BoxCampaignBuyHistoryUpdateManyWithoutBoxInput, {nullable:true})
    buyHistory?: BoxCampaignBuyHistoryUpdateManyWithoutBoxInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
