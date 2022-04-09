import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileWhereInput } from './user-profile-where.input';
import { UserProfileOrderByWithRelationAndSearchRelevanceInput } from './user-profile-order-by-with-relation-and-search-relevance.input';
import { UserProfileWhereUniqueInput } from './user-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserProfileScalarFieldEnum } from './user-profile-scalar-field.enum';

@ArgsType()
export class FindManyUserProfileArgs {

    @Field(() => UserProfileWhereInput, {nullable:true})
    where?: UserProfileWhereInput;

    @Field(() => [UserProfileOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<UserProfileOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    cursor?: UserProfileWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserProfileScalarFieldEnum>;
}
