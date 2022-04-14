import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { GameStatisticsUpdateWithoutGameInput } from './game-statistics-update-without-game.input';
import { GameStatisticsCreateWithoutGameInput } from './game-statistics-create-without-game.input';

@InputType()
export class GameStatisticsUpsertWithWhereUniqueWithoutGameInput {

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:false})
    where!: GameStatisticsWhereUniqueInput;

    @Field(() => GameStatisticsUpdateWithoutGameInput, {nullable:false})
    update!: GameStatisticsUpdateWithoutGameInput;

    @Field(() => GameStatisticsCreateWithoutGameInput, {nullable:false})
    create!: GameStatisticsCreateWithoutGameInput;
}
