import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { GameStatisticsCreateWithoutCurrencyInput } from './game-statistics-create-without-currency.input';

@InputType()
export class GameStatisticsCreateOrConnectWithoutCurrencyInput {

    @Field(() => GameStatisticsWhereUniqueInput, {nullable:false})
    where!: GameStatisticsWhereUniqueInput;

    @Field(() => GameStatisticsCreateWithoutCurrencyInput, {nullable:false})
    create!: GameStatisticsCreateWithoutCurrencyInput;
}
