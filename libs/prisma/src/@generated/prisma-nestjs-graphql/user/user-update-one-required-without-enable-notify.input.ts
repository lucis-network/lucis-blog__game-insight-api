import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEnable_notifyInput } from './user-create-without-enable-notify.input';
import { UserCreateOrConnectWithoutEnable_notifyInput } from './user-create-or-connect-without-enable-notify.input';
import { UserUpsertWithoutEnable_notifyInput } from './user-upsert-without-enable-notify.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutEnable_notifyInput } from './user-update-without-enable-notify.input';

@InputType()
export class UserUpdateOneRequiredWithoutEnable_notifyInput {

    @Field(() => UserCreateWithoutEnable_notifyInput, {nullable:true})
    create?: UserCreateWithoutEnable_notifyInput;

    @Field(() => UserCreateOrConnectWithoutEnable_notifyInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEnable_notifyInput;

    @Field(() => UserUpsertWithoutEnable_notifyInput, {nullable:true})
    upsert?: UserUpsertWithoutEnable_notifyInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutEnable_notifyInput, {nullable:true})
    update?: UserUpdateWithoutEnable_notifyInput;
}
