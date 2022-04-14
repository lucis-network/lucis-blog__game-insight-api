import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { GameStatisticsCreateWithoutGameInput } from './game-statistics-create-without-game.input';

@InputType()
export class GameStatisticsCreateOrConnectWithoutGameInput {

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:false})
    where!: GameStatisticsWhereUniqueInput;

    @Field(() => GameStatisticsCreateWithoutGameInput, {nullable:false})
    create!: GameStatisticsCreateWithoutGameInput;
}
