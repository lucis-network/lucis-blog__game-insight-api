import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameUpdateWithoutGame_chartsInput } from './game-update-without-game-charts.input';
import { GameCreateWithoutGame_chartsInput } from './game-create-without-game-charts.input';

@InputType()
export class GameUpsertWithoutGame_chartsInput {

    @Field(() => GameUpdateWithoutGame_chartsInput, {nullable:false})
    update!: GameUpdateWithoutGame_chartsInput;

    @Field(() => GameCreateWithoutGame_chartsInput, {nullable:false})
    create!: GameCreateWithoutGame_chartsInput;
}
