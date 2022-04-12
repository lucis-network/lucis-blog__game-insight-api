import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRankingWhereInput } from './game-ranking-where.input';

@InputType()
export class GameRankingRelationFilter {

    @Field(() => GameRankingWhereInput, {nullable:true})
    is?: GameRankingWhereInput;

    @Field(() => GameRankingWhereInput, {nullable:true})
    isNot?: GameRankingWhereInput;
}
