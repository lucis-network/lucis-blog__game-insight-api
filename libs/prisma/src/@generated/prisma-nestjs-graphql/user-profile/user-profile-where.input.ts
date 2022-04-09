import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserProfileWhereInput {

    @Field(() => [UserProfileWhereInput], {nullable:true})
    AND?: Array<UserProfileWhereInput>;

    @Field(() => [UserProfileWhereInput], {nullable:true})
    OR?: Array<UserProfileWhereInput>;

    @Field(() => [UserProfileWhereInput], {nullable:true})
    NOT?: Array<UserProfileWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    full_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    twitter?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    facebook?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telegram?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    discord?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    cover?: StringNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
