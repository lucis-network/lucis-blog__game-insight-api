import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { GameStatisticsUpdateWithoutCurrencyInput } from './game-statistics-update-without-currency.input';
import { GameStatisticsCreateWithoutCurrencyInput } from './game-statistics-create-without-currency.input';

@InputType()
export class GameStatisticsUpsertWithWhereUniqueWithoutCurrencyInput {

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:false})
    where!: GameStatisticsWhereUniqueInput;

    @Field(() => GameStatisticsUpdateWithoutCurrencyInput, {nullable:false})
    update!: GameStatisticsUpdateWithoutCurrencyInput;

    @Field(() => GameStatisticsCreateWithoutCurrencyInput, {nullable:false})
    create!: GameStatisticsCreateWithoutCurrencyInput;
}
