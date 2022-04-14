import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRankingOrderByRelevanceFieldEnum } from './game-ranking-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameRankingOrderByRelevanceInput {

    @Field(() => [GameRankingOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof GameRankingOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
