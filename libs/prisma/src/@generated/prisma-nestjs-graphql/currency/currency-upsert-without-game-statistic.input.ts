import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyUpdateWithoutGame_statisticInput } from './currency-update-without-game-statistic.input';
import { CurrencyCreateWithoutGame_statisticInput } from './currency-create-without-game-statistic.input';

@InputType()
export class CurrencyUpsertWithoutGame_statisticInput {

    @Field(() => CurrencyUpdateWithoutGame_statisticInput, {nullable:false})
    update!: CurrencyUpdateWithoutGame_statisticInput;

    @Field(() => CurrencyCreateWithoutGame_statisticInput, {nullable:false})
    create!: CurrencyCreateWithoutGame_statisticInput;
}
