import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileWhereInput } from './user-profile-where.input';

@ArgsType()
export class DeleteManyUserProfileArgs {

    @Field(() => UserProfileWhereInput, {nullable:true})
    where?: UserProfileWhereInput;
}
