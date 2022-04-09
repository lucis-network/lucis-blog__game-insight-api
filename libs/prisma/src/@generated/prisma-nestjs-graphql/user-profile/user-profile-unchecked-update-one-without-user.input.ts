import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileCreateWithoutUserInput } from './user-profile-create-without-user.input';
import { UserProfileCreateOrConnectWithoutUserInput } from './user-profile-create-or-connect-without-user.input';
import { UserProfileUpsertWithoutUserInput } from './user-profile-upsert-without-user.input';
import { UserProfileWhereUniqueInput } from './user-profile-where-unique.input';
import { UserProfileUpdateWithoutUserInput } from './user-profile-update-without-user.input';

@InputType()
export class UserProfileUncheckedUpdateOneWithoutUserInput {

    @Field(() => UserProfileCreateWithoutUserInput, {nullable:true})
    create?: UserProfileCreateWithoutUserInput;

    @Field(() => UserProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput;

    @Field(() => UserProfileUpsertWithoutUserInput, {nullable:true})
    upsert?: UserProfileUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    connect?: UserProfileWhereUniqueInput;

    @Field(() => UserProfileUpdateWithoutUserInput, {nullable:true})
    update?: UserProfileUpdateWithoutUserInput;
}
