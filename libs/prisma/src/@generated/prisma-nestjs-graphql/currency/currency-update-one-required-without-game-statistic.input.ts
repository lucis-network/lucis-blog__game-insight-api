import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutGame_statisticInput } from './currency-create-without-game-statistic.input';
import { CurrencyCreateOrConnectWithoutGame_statisticInput } from './currency-create-or-connect-without-game-statistic.input';
import { CurrencyUpsertWithoutGame_statisticInput } from './currency-upsert-without-game-statistic.input';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyUpdateWithoutGame_statisticInput } from './currency-update-without-game-statistic.input';

@InputType()
export class CurrencyUpdateOneRequiredWithoutGame_statisticInput {

    @Field(() => CurrencyCreateWithoutGame_statisticInput, {nullable:true})
    create?: CurrencyCreateWithoutGame_statisticInput;

    @Field(() => CurrencyCreateOrConnectWithoutGame_statisticInput, {nullable:true})
    connectOrCreate?: CurrencyCreateOrConnectWithoutGame_statisticInput;

    @Field(() => CurrencyUpsertWithoutGame_statisticInput, {nullable:true})
    upsert?: CurrencyUpsertWithoutGame_statisticInput;

    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    connect?: CurrencyWhereUniqueInput;

    @Field(() => CurrencyUpdateWithoutGame_statisticInput, {nullable:true})
    update?: CurrencyUpdateWithoutGame_statisticInput;
}
