import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserProfileMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    user_id?: true;

    @Field(() => Boolean, {nullable:true})
    full_name?: true;

    @Field(() => Boolean, {nullable:true})
    twitter?: true;

    @Field(() => Boolean, {nullable:true})
    facebook?: true;

    @Field(() => Boolean, {nullable:true})
    telegram?: true;

    @Field(() => Boolean, {nullable:true})
    discord?: true;

    @Field(() => Boolean, {nullable:true})
    phone?: true;

    @Field(() => Boolean, {nullable:true})
    avatar?: true;

    @Field(() => Boolean, {nullable:true})
    cover?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;
}
