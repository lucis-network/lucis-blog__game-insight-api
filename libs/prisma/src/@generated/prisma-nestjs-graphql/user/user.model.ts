import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserRole } from '../prisma/user-role.enum';
import { UserStatus } from '../prisma/user-status.enum';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => UserRole, {nullable:false,defaultValue:'CUSTOMER'})
    role!: keyof typeof UserRole;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => String, {nullable:true})
    ref_code!: string | null;

    @Field(() => UserStatus, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof UserStatus;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
