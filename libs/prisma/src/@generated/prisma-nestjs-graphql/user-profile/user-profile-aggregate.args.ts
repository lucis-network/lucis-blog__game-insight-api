import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileWhereInput } from './user-profile-where.input';
import { UserProfileOrderByWithRelationAndSearchRelevanceInput } from './user-profile-order-by-with-relation-and-search-relevance.input';
import { UserProfileWhereUniqueInput } from './user-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserProfileCountAggregateInput } from './user-profile-count-aggregate.input';
import { UserProfileAvgAggregateInput } from './user-profile-avg-aggregate.input';
import { UserProfileSumAggregateInput } from './user-profile-sum-aggregate.input';
import { UserProfileMinAggregateInput } from './user-profile-min-aggregate.input';
import { UserProfileMaxAggregateInput } from './user-profile-max-aggregate.input';

@ArgsType()
export class UserProfileAggregateArgs {

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

    @Field(() => UserProfileCountAggregateInput, {nullable:true})
    _count?: UserProfileCountAggregateInput;

    @Field(() => UserProfileAvgAggregateInput, {nullable:true})
    _avg?: UserProfileAvgAggregateInput;

    @Field(() => UserProfileSumAggregateInput, {nullable:true})
    _sum?: UserProfileSumAggregateInput;

    @Field(() => UserProfileMinAggregateInput, {nullable:true})
    _min?: UserProfileMinAggregateInput;

    @Field(() => UserProfileMaxAggregateInput, {nullable:true})
    _max?: UserProfileMaxAggregateInput;
}
