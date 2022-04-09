import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxTypeOrderByRelevanceFieldEnum } from './box-type-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BoxTypeOrderByRelevanceInput {

    @Field(() => [BoxTypeOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof BoxTypeOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
