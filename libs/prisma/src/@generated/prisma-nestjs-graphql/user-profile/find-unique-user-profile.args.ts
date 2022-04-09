import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileWhereUniqueInput } from './user-profile-where-unique.input';

@ArgsType()
export class FindUniqueUserProfileArgs {

    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    where!: UserProfileWhereUniqueInput;
}
