import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileCreateManyInput } from './user-profile-create-many.input';

@ArgsType()
export class CreateManyUserProfileArgs {

    @Field(() => [UserProfileCreateManyInput], {nullable:false})
    data!: Array<UserProfileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
