import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { UserStatus } from '../prisma/user-status.enum';
import { BoxCampaignSubscribesCreateNestedManyWithoutUserInput } from '../box-campaign-subscribes/box-campaign-subscribes-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutProfileInput {

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

    @Field(() => BoxCampaignSubscribesCreateNestedManyWithoutUserInput, {nullable:true})
    enable_notify?: BoxCampaignSubscribesCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
