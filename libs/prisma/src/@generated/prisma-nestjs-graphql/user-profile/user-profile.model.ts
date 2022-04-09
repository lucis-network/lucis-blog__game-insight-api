import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class UserProfile {

    @Field(() => ID, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:true})
    full_name!: string | null;

    @Field(() => String, {nullable:true})
    twitter!: string | null;

    @Field(() => String, {nullable:true})
    facebook!: string | null;

    @Field(() => String, {nullable:true})
    telegram!: string | null;

    @Field(() => String, {nullable:true})
    discord!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => String, {nullable:true})
    cover!: string | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
