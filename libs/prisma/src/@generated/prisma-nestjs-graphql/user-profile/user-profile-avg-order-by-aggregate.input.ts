import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserProfileAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
}