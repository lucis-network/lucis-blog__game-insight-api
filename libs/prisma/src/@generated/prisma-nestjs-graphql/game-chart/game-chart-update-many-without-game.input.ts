import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartCreateWithoutGameInput } from './game-chart-create-without-game.input';
import { GameChartCreateOrConnectWithoutGameInput } from './game-chart-create-or-connect-without-game.input';
import { GameChartUpsertWithWhereUniqueWithoutGameInput } from './game-chart-upsert-with-where-unique-without-game.input';
import { GameChartCreateManyGameInputEnvelope } from './game-chart-create-many-game-input-envelope.input';
import { GameChartWhereUniqueInput } from './game-chart-where-unique.input';
import { GameChartUpdateWithWhereUniqueWithoutGameInput } from './game-chart-update-with-where-unique-without-game.input';
import { GameChartUpdateManyWithWhereWithoutGameInput } from './game-chart-update-many-with-where-without-game.input';
import { GameChartScalarWhereInput } from './game-chart-scalar-where.input';

@InputType()
export class GameChartUpdateManyWithoutGameInput {

    @Field(() => [GameChartCreateWithoutGameInput], {nullable:true})
    create?: Array<GameChartCreateWithoutGameInput>;

    @Field(() => [GameChartCreateOrConnectWithoutGameInput], {nullable:true})
    connectOrCreate?: Array<GameChartCreateOrConnectWithoutGameInput>;

    @Field(() => [GameChartUpsertWithWhereUniqueWithoutGameInput], {nullable:true})
    upsert?: Array<GameChartUpsertWithWhereUniqueWithoutGameInput>;

    @Field(() => GameChartCreateManyGameInputEnvelope, {nullable:true})
    createMany?: GameChartCreateManyGameInputEnvelope;

    @Field(() => [GameChartWhereUniqueInput], {nullable:true})
    set?: Array<GameChartWhereUniqueInput>;

    @Field(() => [GameChartWhereUniqueInput], {nullable:true})
    disconnect?: Array<GameChartWhereUniqueInput>;

    @Field(() => [GameChartWhereUniqueInput], {nullable:true})
    delete?: Array<GameChartWhereUniqueInput>;

    @Field(() => [GameChartWhereUniqueInput], {nullable:true})
    connect?: Array<GameChartWhereUniqueInput>;

    @Field(() => [GameChartUpdateWithWhereUniqueWithoutGameInput], {nullable:true})
    update?: Array<GameChartUpdateWithWhereUniqueWithoutGameInput>;

    @Field(() => [GameChartUpdateManyWithWhereWithoutGameInput], {nullable:true})
    updateMany?: Array<GameChartUpdateManyWithWhereWithoutGameInput>;

    @Field(() => [GameChartScalarWhereInput], {nullable:true})
    deleteMany?: Array<GameChartScalarWhereInput>;
}
