import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameUpdateWithoutGame_insightInput } from './game-update-without-game-insight.input';
import { GameCreateWithoutGame_insightInput } from './game-create-without-game-insight.input';

@InputType()
export class GameUpsertWithoutGame_insightInput {

    @Field(() => GameUpdateWithoutGame_insightInput, {nullable:false})
    update!: GameUpdateWithoutGame_insightInput;

    @Field(() => GameCreateWithoutGame_insightInput, {nullable:false})
    create!: GameCreateWithoutGame_insightInput;
}
