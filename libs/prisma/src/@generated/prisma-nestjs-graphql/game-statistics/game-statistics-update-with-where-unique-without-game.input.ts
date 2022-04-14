import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { GameStatisticsUpdateWithoutGameInput } from './game-statistics-update-without-game.input';

@InputType()
export class GameStatisticsUpdateWithWhereUniqueWithoutGameInput {

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:false})
    where!: GameStatisticsWhereUniqueInput;

    @Field(() => GameStatisticsUpdateWithoutGameInput, {nullable:false})
    data!: GameStatisticsUpdateWithoutGameInput;
}
