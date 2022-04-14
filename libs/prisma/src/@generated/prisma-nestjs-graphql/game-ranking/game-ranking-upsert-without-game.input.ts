import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRankingUpdateWithoutGameInput } from './game-ranking-update-without-game.input';
import { GameRankingCreateWithoutGameInput } from './game-ranking-create-without-game.input';

@InputType()
export class GameRankingUpsertWithoutGameInput {

    @Field(() => GameRankingUpdateWithoutGameInput, {nullable:false})
    update!: GameRankingUpdateWithoutGameInput;

    @Field(() => GameRankingCreateWithoutGameInput, {nullable:false})
    create!: GameRankingCreateWithoutGameInput;
}
