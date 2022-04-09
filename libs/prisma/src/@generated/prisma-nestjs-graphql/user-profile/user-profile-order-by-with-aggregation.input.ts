import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserProfileCountOrderByAggregateInput } from './user-profile-count-order-by-aggregate.input';
import { UserProfileAvgOrderByAggregateInput } from './user-profile-avg-order-by-aggregate.input';
import { UserProfileMaxOrderByAggregateInput } from './user-profile-max-order-by-aggregate.input';
import { UserProfileMinOrderByAggregateInput } from './user-profile-min-order-by-aggregate.input';
import { UserProfileSumOrderByAggregateInput } from './user-profile-sum-order-by-aggregate.input';

@InputType()
export class UserProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    full_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    twitter?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    facebook?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    telegram?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discord?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    avatar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cover?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => UserProfileCountOrderByAggregateInput, {nullable:true})
    _count?: UserProfileCountOrderByAggregateInput;

    @Field(() => UserProfileAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserProfileAvgOrderByAggregateInput;

    @Field(() => UserProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: UserProfileMaxOrderByAggregateInput;

    @Field(() => UserProfileMinOrderByAggregateInput, {nullable:true})
    _min?: UserProfileMinOrderByAggregateInput;

    @Field(() => UserProfileSumOrderByAggregateInput, {nullable:true})
    _sum?: UserProfileSumOrderByAggregateInput;
}
