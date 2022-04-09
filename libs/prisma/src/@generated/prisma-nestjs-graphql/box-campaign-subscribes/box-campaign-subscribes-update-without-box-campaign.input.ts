import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutEnable_notifyInput } from '../user/user-update-one-required-without-enable-notify.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class BoxCampaignSubscribesUpdateWithoutBox_campaignInput {

    @Field(() => GraphQLJSON, {nullable:true})
    round?: any;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    finish?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    enable_notify?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutEnable_notifyInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutEnable_notifyInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
