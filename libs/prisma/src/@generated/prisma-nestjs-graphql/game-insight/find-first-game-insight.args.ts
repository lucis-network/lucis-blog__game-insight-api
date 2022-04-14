import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameInsightWhereInput } from './game-insight-where.input';
import { GameInsightOrderByWithRelationAndSearchRelevanceInput } from './game-insight-order-by-with-relation-and-search-relevance.input';
import { GameInsightWhereUniqueInput } from './game-insight-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GameInsightScalarFieldEnum } from './game-insight-scalar-field.enum';

@ArgsType()
export class FindFirstGameInsightArgs {

    @Field(() => GameInsightWhereInput, {nullable:true})
    where?: GameInsightWhereInput;

    @Field(() => [GameInsightOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<GameInsightOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => GameInsightWhereUniqueInput, {nullable:true})
    cursor?: GameInsightWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GameInsightScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GameInsightScalarFieldEnum>;
}
