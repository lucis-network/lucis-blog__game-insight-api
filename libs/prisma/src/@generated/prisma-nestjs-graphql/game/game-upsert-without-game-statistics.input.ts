import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameUpdateWithoutGame_statisticsInput } from './game-update-without-game-statistics.input';
import { GameCreateWithoutGame_statisticsInput } from './game-create-without-game-statistics.input';

@InputType()
export class GameUpsertWithoutGame_statisticsInput {

    @Field(() => GameUpdateWithoutGame_statisticsInput, {nullable:false})
    update!: GameUpdateWithoutGame_statisticsInput;

    @Field(() => GameCreateWithoutGame_statisticsInput, {nullable:false})
    create!: GameCreateWithoutGame_statisticsInput;
}
