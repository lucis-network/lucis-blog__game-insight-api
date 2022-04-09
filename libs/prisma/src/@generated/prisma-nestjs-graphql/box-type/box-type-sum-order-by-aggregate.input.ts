import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BoxTypeSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    total_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sold_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    limit_per_user?: keyof typeof SortOrder;
}
