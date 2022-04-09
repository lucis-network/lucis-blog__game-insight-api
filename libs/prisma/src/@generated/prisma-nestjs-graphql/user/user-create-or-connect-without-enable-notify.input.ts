import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutEnable_notifyInput } from './user-create-without-enable-notify.input';

@InputType()
export class UserCreateOrConnectWithoutEnable_notifyInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutEnable_notifyInput, {nullable:false})
    create!: UserCreateWithoutEnable_notifyInput;
}
