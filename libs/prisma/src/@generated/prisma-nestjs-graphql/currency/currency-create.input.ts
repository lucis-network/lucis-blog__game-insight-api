import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainCreateNestedOneWithoutCurrenciesInput } from '../chain/chain-create-nested-one-without-currencies.input';
import { GameStatisticsCreateNestedManyWithoutCurrencyInput } from '../game-statistics/game-statistics-create-nested-many-without-currency.input';

@InputType()
export class CurrencyCreateInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:false})
    symbol!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    owner?: string;

    @Field(() => ChainCreateNestedOneWithoutCurrenciesInput, {nullable:false})
    chain!: ChainCreateNestedOneWithoutCurrenciesInput;

    @Field(() => GameStatisticsCreateNestedManyWithoutCurrencyInput, {nullable:true})
    game_statistic?: GameStatisticsCreateNestedManyWithoutCurrencyInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
