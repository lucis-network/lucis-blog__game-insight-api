import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsCreateWithoutGameInput } from './game-statistics-create-without-game.input';
import { GameStatisticsCreateOrConnectWithoutGameInput } from './game-statistics-create-or-connect-without-game.input';
import { GameStatisticsUpsertWithWhereUniqueWithoutGameInput } from './game-statistics-upsert-with-where-unique-without-game.input';
import { GameStatisticsCreateManyGameInputEnvelope } from './game-statistics-create-many-game-input-envelope.input';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';
import { GameStatisticsUpdateWithWhereUniqueWithoutGameInput } from './game-statistics-update-with-where-unique-without-game.input';
import { GameStatisticsUpdateManyWithWhereWithoutGameInput } from './game-statistics-update-many-with-where-without-game.input';
import { GameStatisticsScalarWhereInput } from './game-statistics-scalar-where.input';

@InputType()
export class GameStatisticsUncheckedUpdateManyWithoutGameInput {

    @Field(() => [GameStatisticsCreateWithoutGameInput], {nullable:true})
    create?: Array<GameStatisticsCreateWithoutGameInput>;

    @Field(() => [GameStatisticsCreateOrConnectWithoutGameInput], {nullable:true})
    connectOrCreate?: Array<GameStatisticsCreateOrConnectWithoutGameInput>;

    @Field(() => [GameStatisticsUpsertWithWhereUniqueWithoutGameInput], {nullable:true})
    upsert?: Array<GameStatisticsUpsertWithWhereUniqueWithoutGameInput>;

    @Field(() => GameStatisticsCreateManyGameInputEnvelope, {nullable:true})
    createMany?: GameStatisticsCreateManyGameInputEnvelope;

    @Field(() => [GameStatisticsWhereUniqueInput], {nullable:true})
    set?: Array<GameStatisticsWhereUniqueInput>;

    @Field(() => [GameStatisticsWhereUniqueInput], {nullable:true})
    disconnect?: Array<GameStatisticsWhereUniqueInput>;

    @Field(() => [GameStatisticsWhereUniqueInput], {nullable:true})
    delete?: Array<GameStatisticsWhereUniqueInput>;

    @Field(() => [GameStatisticsWhereUniqueInput], {nullable:true})
    connect?: Array<GameStatisticsWhereUniqueInput>;

    @Field(() => [GameStatisticsUpdateWithWhereUniqueWithoutGameInput], {nullable:true})
    update?: Array<GameStatisticsUpdateWithWhereUniqueWithoutGameInput>;

    @Field(() => [GameStatisticsUpdateManyWithWhereWithoutGameInput], {nullable:true})
    updateMany?: Array<GameStatisticsUpdateManyWithWhereWithoutGameInput>;

    @Field(() => [GameStatisticsScalarWhereInput], {nullable:true})
    deleteMany?: Array<GameStatisticsScalarWhereInput>;
}
