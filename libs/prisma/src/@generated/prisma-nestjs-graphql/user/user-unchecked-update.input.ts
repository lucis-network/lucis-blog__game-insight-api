import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumUserRoleFieldUpdateOperationsInput } from '../prisma/enum-user-role-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumUserStatusFieldUpdateOperationsInput } from '../prisma/enum-user-status-field-update-operations.input';
import { UserProfileUncheckedUpdateOneWithoutUserInput } from '../user-profile/user-profile-unchecked-update-one-without-user.input';
import { BoxCampaignSubscribesUncheckedUpdateManyWithoutUserInput } from '../box-campaign-subscribes/box-campaign-subscribes-unchecked-update-many-without-user.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => EnumUserRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumUserRoleFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    ref_code?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumUserStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumUserStatusFieldUpdateOperationsInput;

    @Field(() => UserProfileUncheckedUpdateOneWithoutUserInput, {nullable:true})
    profile?: UserProfileUncheckedUpdateOneWithoutUserInput;

    @Field(() => BoxCampaignSubscribesUncheckedUpdateManyWithoutUserInput, {nullable:true})
    enable_notify?: BoxCampaignSubscribesUncheckedUpdateManyWithoutUserInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;
}
