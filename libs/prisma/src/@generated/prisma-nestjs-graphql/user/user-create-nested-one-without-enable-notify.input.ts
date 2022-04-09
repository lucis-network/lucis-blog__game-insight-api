import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEnable_notifyInput } from './user-create-without-enable-notify.input';
import { UserCreateOrConnectWithoutEnable_notifyInput } from './user-create-or-connect-without-enable-notify.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEnable_notifyInput {

    @Field(() => UserCreateWithoutEnable_notifyInput, {nullable:true})
    create?: UserCreateWithoutEnable_notifyInput;

    @Field(() => UserCreateOrConnectWithoutEnable_notifyInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEnable_notifyInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
