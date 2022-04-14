import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRankingWhereUniqueInput } from './game-ranking-where-unique.input';
import { GameRankingCreateWithoutGameInput } from './game-ranking-create-without-game.input';

@InputType()
export class GameRankingCreateOrConnectWithoutGameInput {

    @Field(() => GameRankingWhereUniqueInput, {nullable:false})
    where!: GameRankingWhereUniqueInput;

    @Field(() => GameRankingCreateWithoutGameInput, {nullable:false})
    create!: GameRankingCreateWithoutGameInput;
}
