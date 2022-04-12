import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { GameStatisticsUpdateWithoutCurrencyInput } from './game-statistics-update-without-currency.input';

@InputType()
export class GameStatisticsUpdateWithWhereUniqueWithoutCurrencyInput {

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:false})
    where!: GameStatisticsWhereUniqueInput;

    @Field(() => GameStatisticsUpdateWithoutCurrencyInput, {nullable:false})
    data!: GameStatisticsUpdateWithoutCurrencyInput;
}
