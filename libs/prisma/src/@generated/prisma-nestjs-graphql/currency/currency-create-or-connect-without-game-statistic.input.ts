import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyCreateWithoutGame_statisticInput } from './currency-create-without-game-statistic.input';

@InputType()
export class CurrencyCreateOrConnectWithoutGame_statisticInput {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    where!: CurrencyWhereUniqueInput;

    @Field(() => CurrencyCreateWithoutGame_statisticInput, {nullable:false})
    create!: CurrencyCreateWithoutGame_statisticInput;
}
