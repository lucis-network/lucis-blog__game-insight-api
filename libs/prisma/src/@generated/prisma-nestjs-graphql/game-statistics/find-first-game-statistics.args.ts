import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameStatisticsWhereInput } from './game-statistics-where.input';
import { GameStatisticsOrderByWithRelationAndSearchRelevanceInput } from './game-statistics-order-by-with-relation-and-search-relevance.input';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameStatisticsScalarFieldEnum } from './game-statistics-scalar-field.enum';

@ArgsType()
export class FindFirstGameStatisticsArgs {

    @Field(() => GameStatisticsWhereInput, {nullable:true})
    where?: GameStatisticsWhereInput;

    @Field(() => [GameStatisticsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameStatisticsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:true})
    cursor?: GameStatisticsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GameStatisticsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GameStatisticsScalarFieldEnum>;
}
