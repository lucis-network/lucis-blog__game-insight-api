import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRankingCreateWithoutGameInput } from './game-ranking-create-without-game.input';
import { GameRankingCreateOrConnectWithoutGameInput } from './game-ranking-create-or-connect-without-game.input';
import { GameRankingWhereUniqueInput } from './game-ranking-where-unique.input';

@InputType()
export class GameRankingCreateNestedOneWithoutGameInput {

    @Field(() => GameRankingCreateWithoutGameInput, {nullable:true})
    create?: GameRankingCreateWithoutGameInput;

    @Field(() => GameRankingCreateOrConnectWithoutGameInput, {nullable:true})
    connectOrCreate?: GameRankingCreateOrConnectWithoutGameInput;

    @Field(() => GameRankingWhereUniqueInput, {nullable:true})
    connect?: GameRankingWhereUniqueInput;
}
