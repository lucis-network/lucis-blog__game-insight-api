import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileCreateWithoutUserInput } from './user-profile-create-without-user.input';
import { UserProfileCreateOrConnectWithoutUserInput } from './user-profile-create-or-connect-without-user.input';
import { UserProfileWhereUniqueInput } from './user-profile-where-unique.input';

@InputType()
export class UserProfileUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => UserProfileCreateWithoutUserInput, {nullable:true})
    create?: UserProfileCreateWithoutUserInput;

    @Field(() => UserProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput;

    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    connect?: UserProfileWhereUniqueInput;
}
