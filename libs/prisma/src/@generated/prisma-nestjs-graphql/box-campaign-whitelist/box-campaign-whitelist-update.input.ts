import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoxCampaignUpdateOneRequiredWithoutWhitelistsInput } from '../box-campaign/box-campaign-update-one-required-without-whitelists.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class BoxCampaignWhitelistUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    user_id?: IntFieldUpdateOperationsInput;

    @Field(() => BoxCampaignUpdateOneRequiredWithoutWhitelistsInput, {nullable:true})
    campaign?: BoxCampaignUpdateOneRequiredWithoutWhitelistsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
