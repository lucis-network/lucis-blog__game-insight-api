import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsUncheckedCreateNestedManyWithoutCurrencyInput } from '../game-statistics/game-statistics-unchecked-create-nested-many-without-currency.input';

@InputType()
export class CurrencyUncheckedCreateWithoutChainInput {

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

    @Field(() => GameStatisticsUncheckedCreateNestedManyWithoutCurrencyInput, {nullable:true})
    game_statistic?: GameStatisticsUncheckedCreateNestedManyWithoutCurrencyInput;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
