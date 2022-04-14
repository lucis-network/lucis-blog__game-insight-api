import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutGame_statisticInput } from './currency-create-without-game-statistic.input';
import { CurrencyCreateOrConnectWithoutGame_statisticInput } from './currency-create-or-connect-without-game-statistic.input';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@InputType()
export class CurrencyCreateNestedOneWithoutGame_statisticInput {

    @Field(() => CurrencyCreateWithoutGame_statisticInput, {nullable:true})
    create?: CurrencyCreateWithoutGame_statisticInput;

    @Field(() => CurrencyCreateOrConnectWithoutGame_statisticInput, {nullable:true})
    connectOrCreate?: CurrencyCreateOrConnectWithoutGame_statisticInput;

    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    connect?: CurrencyWhereUniqueInput;
}
