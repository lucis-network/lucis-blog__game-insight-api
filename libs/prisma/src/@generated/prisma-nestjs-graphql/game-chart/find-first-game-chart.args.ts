import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameChartWhereInput } from './game-chart-where.input';
import { GameChartOrderByWithRelationAndSearchRelevanceInput } from './game-chart-order-by-with-relation-and-search-relevance.input';
import { GameChartWhereUniqueInput } from './game-chart-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameChartScalarFieldEnum } from './game-chart-scalar-field.enum';

@ArgsType()
export class FindFirstGameChartArgs {

    @Field(() => GameChartWhereInput, {nullable:true})
    where?: GameChartWhereInput;

    @Field(() => [GameChartOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameChartOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameChartWhereUniqueInput, {nullable:true})
    cursor?: GameChartWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GameChartScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GameChartScalarFieldEnum>;
}
