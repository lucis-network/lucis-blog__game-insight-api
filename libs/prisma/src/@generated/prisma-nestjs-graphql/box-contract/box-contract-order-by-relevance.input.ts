import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractOrderByRelevanceFieldEnum } from './box-contract-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BoxContractOrderByRelevanceInput {

    @Field(() => [BoxContractOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof BoxContractOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
