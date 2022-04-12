import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameStatisticsCreateWithoutGameInput } from './game-statistics-create-without-game.input';
import { GameStatisticsCreateOrConnectWithoutGameInput } from './game-statistics-create-or-connect-without-game.input';
import { GameStatisticsCreateManyGameInputEnvelope } from './game-statistics-create-many-game-input-envelope.input';
import { GameStatisticsWhereUniqueInput } from './game-statistics-where-unique.input';

@InputType()
export class GameStatisticsCreateNestedManyWithoutGameInput {

    @Field(() => [GameStatisticsCreateWithoutGameInput], {nullable:true})
    create?: Array<GameStatisticsCreateWithoutGameInput>;

    @Field(() => [GameStatisticsCreateOrConnectWithoutGameInput], {nullable:true})
    connectOrCreate?: Array<GameStatisticsCreateOrConnectWithoutGameInput>;

    @Field(() => GameStatisticsCreateManyGameInputEnvelope, {nullable:true})
    createMany?: GameStatisticsCreateManyGameInputEnvelope;

    @Field(() => [GameStatisticsWhereUniqueInput], {nullable:true})
    connect?: Array<GameStatisticsWhereUniqueInput>;
}
