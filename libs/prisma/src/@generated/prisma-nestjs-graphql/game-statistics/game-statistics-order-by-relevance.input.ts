import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsOrderByRelevanceFieldEnum } from './game-statistics-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameStatisticsOrderByRelevanceInput {

    @Field(() => [GameStatisticsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof GameStatisticsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
