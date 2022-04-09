import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileWhereInput } from './user-profile-where.input';
import { UserProfileOrderByWithAggregationInput } from './user-profile-order-by-with-aggregation.input';
import { UserProfileScalarFieldEnum } from './user-profile-scalar-field.enum';
import { UserProfileScalarWhereWithAggregatesInput } from './user-profile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserProfileCountAggregateInput } from './user-profile-count-aggregate.input';
import { UserProfileAvgAggregateInput } from './user-profile-avg-aggregate.input';
import { UserProfileSumAggregateInput } from './user-profile-sum-aggregate.input';
import { UserProfileMinAggregateInput } from './user-profile-min-aggregate.input';
import { UserProfileMaxAggregateInput } from './user-profile-max-aggregate.input';

@ArgsType()
export class UserProfileGroupByArgs {

    @Field(() => UserProfileWhereInput, {nullable:true})
    where?: UserProfileWhereInput;

    @Field(() => [UserProfileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserProfileOrderByWithAggregationInput>;

    @Field(() => [UserProfileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserProfileScalarFieldEnum>;

    @Field(() => UserProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserProfileScalarWhereWithAggregatesInput;

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
