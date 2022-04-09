import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUpdateInput } from './user-profile-update.input';
import { UserProfileWhereUniqueInput } from './user-profile-where-unique.input';

@ArgsType()
export class UpdateOneUserProfileArgs {

    @Field(() => UserProfileUpdateInput, {nullable:false})
    data!: UserProfileUpdateInput;

    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    where!: UserProfileWhereUniqueInput;
}
