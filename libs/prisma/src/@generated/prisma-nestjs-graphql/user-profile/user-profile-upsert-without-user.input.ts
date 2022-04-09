import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUpdateWithoutUserInput } from './user-profile-update-without-user.input';
import { UserProfileCreateWithoutUserInput } from './user-profile-create-without-user.input';

@InputType()
export class UserProfileUpsertWithoutUserInput {

    @Field(() => UserProfileUpdateWithoutUserInput, {nullable:false})
    update!: UserProfileUpdateWithoutUserInput;

    @Field(() => UserProfileCreateWithoutUserInput, {nullable:false})
    create!: UserProfileCreateWithoutUserInput;
}
