import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameInsightUpdateWithoutGameInput } from './game-insight-update-without-game.input';
import { GameInsightCreateWithoutGameInput } from './game-insight-create-without-game.input';

@InputType()
export class GameInsightUpsertWithoutGameInput {

    @Field(() => GameInsightUpdateWithoutGameInput, {nullable:false})
    update!: GameInsightUpdateWithoutGameInput;

    @Field(() => GameInsightCreateWithoutGameInput, {nullable:false})
    create!: GameInsightCreateWithoutGameInput;
}
