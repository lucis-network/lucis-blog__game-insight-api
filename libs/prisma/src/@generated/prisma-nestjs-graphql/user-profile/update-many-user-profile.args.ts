import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUpdateManyMutationInput } from './user-profile-update-many-mutation.input';
import { UserProfileWhereInput } from './user-profile-where.input';

@ArgsType()
export class UpdateManyUserProfileArgs {

    @Field(() => UserProfileUpdateManyMutationInput, {nullable:false})
    data!: UserProfileUpdateManyMutationInput;

    @Field(() => UserProfileWhereInput, {nullable:true})
    where?: UserProfileWhereInput;
}
