import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsCreateWithoutCurrencyInput } from './game-statistics-create-without-currency.input';
import { GameStatisticsCreateOrConnectWithoutCurrencyInput } from './game-statistics-create-or-connect-without-currency.input';
import { GameStatisticsCreateManyCurrencyInputEnvelope } from './game-statistics-create-many-currency-input-envelope.input';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';

@InputType()
export class GameStatisticsUncheckedCreateNestedManyWithoutCurrencyInput {

    @Field(() => [GameStatisticsCreateWithoutCurrencyInput], {nullable:true})
    create?: Array<GameStatisticsCreateWithoutCurrencyInput>;

    @Field(() => [GameStatisticsCreateOrConnectWithoutCurrencyInput], {nullable:true})
    connectOrCreate?: Array<GameStatisticsCreateOrConnectWithoutCurrencyInput>;

    @Field(() => GameStatisticsCreateManyCurrencyInputEnvelope, {nullable:true})
    createMany?: GameStatisticsCreateManyCurrencyInputEnvelope;

    @Field(() => [GameStatisticsWhereUniqueInput], {nullable:true})
    connect?: Array<GameStatisticsWhereUniqueInput>;
}
