import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainSymbol } from '../prisma/chain-symbol.enum';
import { GameStatisticsUncheckedCreateNestedManyWithoutCurrencyInput } from '../game-statistics/game-statistics-unchecked-create-nested-many-without-currency.input';

@InputType()
export class CurrencyUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:false})
    symbol!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => ChainSymbol, {nullable:false})
    chain_symbol!: keyof typeof ChainSymbol;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    owner?: string;

    @Field(() => GameStatisticsUncheckedCreateNestedManyWithoutCurrencyInput, {nullable:true})
    game_statistic?: GameStatisticsUncheckedCreateNestedManyWithoutCurrencyInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
