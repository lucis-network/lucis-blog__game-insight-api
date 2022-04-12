import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameChartCreateWithoutGameInput } from './game-chart-create-without-game.input';
import { GameChartCreateOrConnectWithoutGameInput } from './game-chart-create-or-connect-without-game.input';
import { GameChartCreateManyGameInputEnvelope } from './game-chart-create-many-game-input-envelope.input';
import { GameChartWhereUniqueInput } from './game-chart-where-unique.input';

@InputType()
export class GameChartUncheckedCreateNestedManyWithoutGameInput {

    @Field(() => [GameChartCreateWithoutGameInput], {nullable:true})
    create?: Array<GameChartCreateWithoutGameInput>;

    @Field(() => [GameChartCreateOrConnectWithoutGameInput], {nullable:true})
    connectOrCreate?: Array<GameChartCreateOrConnectWithoutGameInput>;

    @Field(() => GameChartCreateManyGameInputEnvelope, {nullable:true})
    createMany?: GameChartCreateManyGameInputEnvelope;

    @Field(() => [GameChartWhereUniqueInput], {nullable:true})
    connect?: Array<GameChartWhereUniqueInput>;
}
