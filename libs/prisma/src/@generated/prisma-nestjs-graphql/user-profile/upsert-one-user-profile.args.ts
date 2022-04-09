import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileWhereUniqueInput } from './user-profile-where-unique.input';
import { UserProfileCreateInput } from './user-profile-create.input';
import { UserProfileUpdateInput } from './user-profile-update.input';

@ArgsType()
export class UpsertOneUserProfileArgs {

    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    where!: UserProfileWhereUniqueInput;

    @Field(() => UserProfileCreateInput, {nullable:false})
    create!: UserProfileCreateInput;

    @Field(() => UserProfileUpdateInput, {nullable:false})
    update!: UserProfileUpdateInput;
}
