import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereInput } from './game-where.input';
import { GameOrderByWithRelationAndSearchRelevanceInput } from './game-order-by-with-relation-and-search-relevance.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameCountAggregateInput } from './game-count-aggregate.input';
import { GameMinAggregateInput } from './game-min-aggregate.input';
import { GameMaxAggregateInput } from './game-max-aggregate.input';

@ArgsType()
export class GameAggregateArgs {

    @Field(() => GameWhereInput, {nullable:true})
    where?: GameWhereInput;

    @Field(() => [GameOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    cursor?: GameWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GameCountAggregateInput, {nullable:true})
    _count?: GameCountAggregateInput;

    @Field(() => GameMinAggregateInput, {nullable:true})
    _min?: GameMinAggregateInput;

    @Field(() => GameMaxAggregateInput, {nullable:true})
    _max?: GameMaxAggregateInput;
}
