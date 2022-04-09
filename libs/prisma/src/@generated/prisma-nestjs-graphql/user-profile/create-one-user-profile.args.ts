import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileCreateInput } from './user-profile-create.input';

@ArgsType()
export class CreateOneUserProfileArgs {

    @Field(() => UserProfileCreateInput, {nullable:false})
    data!: UserProfileCreateInput;
}
