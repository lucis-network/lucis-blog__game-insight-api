import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameUpdateWithoutGame_rankingInput } from './game-update-without-game-ranking.input';
import { GameCreateWithoutGame_rankingInput } from './game-create-without-game-ranking.input';

@InputType()
export class GameUpsertWithoutGame_rankingInput {

    @Field(() => GameUpdateWithoutGame_rankingInput, {nullable:false})
    update!: GameUpdateWithoutGame_rankingInput;

    @Field(() => GameCreateWithoutGame_rankingInput, {nullable:false})
    create!: GameCreateWithoutGame_rankingInput;
}
