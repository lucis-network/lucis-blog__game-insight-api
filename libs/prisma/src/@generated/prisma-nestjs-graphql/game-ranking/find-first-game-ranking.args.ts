import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRankingWhereInput } from './game-ranking-where.input';
import { GameRankingOrderByWithRelationAndSearchRelevanceInput } from './game-ranking-order-by-with-relation-and-search-relevance.input';
import { GameRankingWhereUniqueInput } from './game-ranking-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameRankingScalarFieldEnum } from './game-ranking-scalar-field.enum';

@ArgsType()
export class FindFirstGameRankingArgs {

    @Field(() => GameRankingWhereInput, {nullable:true})
    where?: GameRankingWhereInput;

    @Field(() => [GameRankingOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameRankingOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameRankingWhereUniqueInput, {nullable:true})
    cursor?: GameRankingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GameRankingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GameRankingScalarFieldEnum>;
}
