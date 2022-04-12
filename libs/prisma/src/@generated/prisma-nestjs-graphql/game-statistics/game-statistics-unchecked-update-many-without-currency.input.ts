import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsCreateWithoutCurrencyInput } from './game-statistics-create-without-currency.input';
import { GameStatisticsCreateOrConnectWithoutCurrencyInput } from './game-statistics-create-or-connect-without-currency.input';
import { GameStatisticsUpsertWithWhereUniqueWithoutCurrencyInput } from './game-statistics-upsert-with-where-unique-without-currency.input';
import { GameStatisticsCreateManyCurrencyInputEnvelope } from './game-statistics-create-many-currency-input-envelope.input';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { GameStatisticsUpdateWithWhereUniqueWithoutCurrencyInput } from './game-statistics-update-with-where-unique-without-currency.input';
import { GameStatisticsUpdateManyWithWhereWithoutCurrencyInput } from './game-statistics-update-many-with-where-without-currency.input';
import { GameStatisticsScalarWhereInput } from './game-statistics-scalar-where.input';

@InputType()
export class GameStatisticsUncheckedUpdateManyWithoutCurrencyInput {

    @Field(() => [GameStatisticsCreateWithoutCurrencyInput], {nullable:true})
    create?: Array<GameStatisticsCreateWithoutCurrencyInput>;

    @Field(() => [GameStatisticsCreateOrConnectWithoutCurrencyInput], {nullable:true})
    connectOrCreate?: Array<GameStatisticsCreateOrConnectWithoutCurrencyInput>;

    @Field(() => [GameStatisticsUpsertWithWhereUniqueWithoutCurrencyInput], {nullable:true})
    upsert?: Array<GameStatisticsUpsertWithWhereUniqueWithoutCurrencyInput>;

    @Field(() => GameStatisticsCreateManyCurrencyInputEnvelope, {nullable:true})
    createMany?: GameStatisticsCreateManyCurrencyInputEnvelope;

    @Field(() => [GameStatisticsWhereUniqueInput], {nullable:true})
    set?: Array<GameStatisticsWhereUniqueInput>;

    @Field(() => [GameStatisticsWhereUniqueInput], {nullable:true})
    disconnect?: Array<GameStatisticsWhereUniqueInput>;

    @Field(() => [GameStatisticsWhereUniqueInput], {nullable:true})
    delete?: Array<GameStatisticsWhereUniqueInput>;

    @Field(() => [GameStatisticsWhereUniqueInput], {nullable:true})
    connect?: Array<GameStatisticsWhereUniqueInput>;

    @Field(() => [GameStatisticsUpdateWithWhereUniqueWithoutCurrencyInput], {nullable:true})
    update?: Array<GameStatisticsUpdateWithWhereUniqueWithoutCurrencyInput>;

    @Field(() => [GameStatisticsUpdateManyWithWhereWithoutCurrencyInput], {nullable:true})
    updateMany?: Array<GameStatisticsUpdateManyWithWhereWithoutCurrencyInput>;

    @Field(() => [GameStatisticsScalarWhereInput], {nullable:true})
    deleteMany?: Array<GameStatisticsScalarWhereInput>;
}
