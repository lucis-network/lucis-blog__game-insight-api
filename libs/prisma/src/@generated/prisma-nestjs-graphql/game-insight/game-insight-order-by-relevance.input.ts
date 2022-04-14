import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameInsightOrderByRelevanceFieldEnum } from './game-insight-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameInsightOrderByRelevanceInput {

    @Field(() => [GameInsightOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof GameInsightOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
