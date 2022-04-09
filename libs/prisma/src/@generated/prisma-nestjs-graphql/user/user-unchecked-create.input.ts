import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { UserStatus } from '../prisma/user-status.enum';
import { UserProfileUncheckedCreateNestedOneWithoutUserInput } from '../user-profile/user-profile-unchecked-create-nested-one-without-user.input';
import { BoxCampaignSubscribesUncheckedCreateNestedManyWithoutUserInput } from '../box-campaign-subscribes/box-campaign-subscribes-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => UserRole, {nullable:true})
    role?: keyof typeof UserRole;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    ref_code?: string;

    @Field(() => UserStatus, {nullable:true})
    status?: keyof typeof UserStatus;

    @Field(() => UserProfileUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => BoxCampaignSubscribesUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    enable_notify?: BoxCampaignSubscribesUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
