import { IsPhoneInput, IsUrlInput } from '@lib/helper/pipe/common.pipe';
import { NullableStringFieldUpdateOperationsInput } from '@lib/prisma/@generated/prisma-nestjs-graphql/prisma/nullable-string-field-update-operations.input';
import { UserUpdateWithoutProfileInput } from '@lib/prisma/@generated/prisma-nestjs-graphql/user/user-update-without-profile.input';
import { Field, InputType, PickType } from '@nestjs/graphql';
import { Validate } from 'class-validator';

@InputType()
export class UserUpdateInput extends PickType(UserUpdateWithoutProfileInput, [
  'email',
] as const) {}

@InputType()
export class UserUpdate {
  @Field(() => UserUpdateInput, { nullable: true })
  update?: UserUpdateInput;
}
@InputType()
export class ProfileUpdateInput {
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  full_name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  @Validate(IsUrlInput)
  twitter?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  @Validate(IsUrlInput)
  facebook?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  @Validate(IsUrlInput)
  telegram?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  @Validate(IsUrlInput)
  discord?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  @Validate(IsPhoneInput)
  phone?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  @Validate(IsUrlInput)
  avatar?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  @Validate(IsUrlInput)
  cover?: NullableStringFieldUpdateOperationsInput;
}
