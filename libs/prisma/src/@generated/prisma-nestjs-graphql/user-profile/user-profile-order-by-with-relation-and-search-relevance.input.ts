import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { UserProfileOrderByRelevanceInput } from './user-profile-order-by-relevance.input';

@InputType()
export class UserProfileOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    user?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => UserProfileOrderByRelevanceInput, {nullable:true})
    _relevance?: UserProfileOrderByRelevanceInput;
}
