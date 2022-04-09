import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEnable_notifyInput } from './user-update-without-enable-notify.input';
import { UserCreateWithoutEnable_notifyInput } from './user-create-without-enable-notify.input';

@InputType()
export class UserUpsertWithoutEnable_notifyInput {

    @Field(() => UserUpdateWithoutEnable_notifyInput, {nullable:false})
    update!: UserUpdateWithoutEnable_notifyInput;

    @Field(() => UserCreateWithoutEnable_notifyInput, {nullable:false})
    create!: UserCreateWithoutEnable_notifyInput;
}
