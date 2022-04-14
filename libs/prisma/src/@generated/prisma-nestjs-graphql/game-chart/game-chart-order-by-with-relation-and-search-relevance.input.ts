import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GameOrderByWithRelationAndSearchRelevanceInput } from '../game/game-order-by-with-relation-and-search-relevance.input';
import { GameChartOrderByRelevanceInput } from './game-chart-order-by-relevance.input';

@InputType()
export class GameChartOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    game_uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    series?: keyof typeof SortOrder;

    @Field(() => GameOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    game?: GameOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => GameChartOrderByRelevanceInput, {nullable:true})
    _relevance?: GameChartOrderByRelevanceInput;
}
