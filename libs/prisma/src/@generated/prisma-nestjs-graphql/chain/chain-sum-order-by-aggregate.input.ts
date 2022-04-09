import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ChainSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    chain_id?: keyof typeof SortOrder;
}
