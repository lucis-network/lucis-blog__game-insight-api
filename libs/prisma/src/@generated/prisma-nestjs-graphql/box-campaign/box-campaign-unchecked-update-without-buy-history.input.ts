import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableEnumBoxCampaignsStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-box-campaigns-status-field-update-operations.input';
import { NullableEnumPublishStatusFieldUpdateOperationsInput } from '../prisma/nullable-enum-publish-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { BoxCampaignSubscribesUncheckedUpdateManyWithoutBox_campaignInput } from '../box-campaign-subscribes/box-campaign-subscribes-unchecked-update-many-without-box-campaign.input';
import { BoxTypeUncheckedUpdateManyWithoutCampaignInput } from '../box-type/box-type-unchecked-update-many-without-campaign.input';
import { BoxCampaignWhitelistUncheckedUpdateManyWithoutCampaignInput } from '../box-campaign-whitelist/box-campaign-whitelist-unchecked-update-many-without-campaign.input';

@InputType()
export class BoxCampaignUncheckedUpdateWithoutBuyHistoryInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uid?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    game_uid?: StringFieldUpdateOperationsInput;

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

    @Field(() => BoxCampaignSubscribesUncheckedUpdateManyWithoutBox_campaignInput, {nullable:true})
    subscribeCampaign?: BoxCampaignSubscribesUncheckedUpdateManyWithoutBox_campaignInput;

    @Field(() => BoxTypeUncheckedUpdateManyWithoutCampaignInput, {nullable:true})
    boxTypes?: BoxTypeUncheckedUpdateManyWithoutCampaignInput;

    @Field(() => BoxCampaignWhitelistUncheckedUpdateManyWithoutCampaignInput, {nullable:true})
    whitelists?: BoxCampaignWhitelistUncheckedUpdateManyWithoutCampaignInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
