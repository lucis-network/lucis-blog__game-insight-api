import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserStatus } from './user-status.enum';

@InputType()
export class NestedEnumUserStatusFilter {

    @Field(() => UserStatus, {nullable:true})
    equals?: keyof typeof UserStatus;

    @Field(() => [UserStatus], {nullable:true})
    in?: Array<keyof typeof UserStatus>;

    @Field(() => [UserStatus], {nullable:true})
    notIn?: Array<keyof typeof UserStatus>;

    @Field(() => NestedEnumUserStatusFilter, {nullable:true})
    not?: NestedEnumUserStatusFilter;
}
