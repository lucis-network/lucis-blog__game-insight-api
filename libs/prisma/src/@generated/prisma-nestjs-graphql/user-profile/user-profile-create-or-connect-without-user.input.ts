import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileWhereUniqueInput } from './user-profile-where-unique.input';
import { UserProfileCreateWithoutUserInput } from './user-profile-create-without-user.input';

@InputType()
export class UserProfileCreateOrConnectWithoutUserInput {

    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    where!: UserProfileWhereUniqueInput;

    @Field(() => UserProfileCreateWithoutUserInput, {nullable:false})
    create!: UserProfileCreateWithoutUserInput;
}
