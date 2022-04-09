import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceOrderByRelevanceFieldEnum } from './box-price-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BoxPriceOrderByRelevanceInput {

    @Field(() => [BoxPriceOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof BoxPriceOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
