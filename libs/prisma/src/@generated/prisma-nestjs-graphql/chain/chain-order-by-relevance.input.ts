import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainOrderByRelevanceFieldEnum } from './chain-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ChainOrderByRelevanceInput {

    @Field(() => [ChainOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof ChainOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
