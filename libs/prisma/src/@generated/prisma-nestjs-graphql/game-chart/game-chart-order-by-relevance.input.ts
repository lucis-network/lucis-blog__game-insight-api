import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartOrderByRelevanceFieldEnum } from './game-chart-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GameChartOrderByRelevanceInput {

    @Field(() => [GameChartOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof GameChartOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
