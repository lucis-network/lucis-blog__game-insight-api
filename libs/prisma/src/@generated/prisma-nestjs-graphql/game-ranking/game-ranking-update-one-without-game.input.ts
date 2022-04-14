import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameRankingCreateWithoutGameInput } from './game-ranking-create-without-game.input';
import { GameRankingCreateOrConnectWithoutGameInput } from './game-ranking-create-or-connect-without-game.input';
import { GameRankingUpsertWithoutGameInput } from './game-ranking-upsert-without-game.input';
import { GameRankingWhereUniqueInput } from './game-ranking-where-unique.input';
import { GameRankingUpdateWithoutGameInput } from './game-ranking-update-without-game.input';

@InputType()
export class GameRankingUpdateOneWithoutGameInput {

    @Field(() => GameRankingCreateWithoutGameInput, {nullable:true})
    create?: GameRankingCreateWithoutGameInput;

    @Field(() => GameRankingCreateOrConnectWithoutGameInput, {nullable:true})
    connectOrCreate?: GameRankingCreateOrConnectWithoutGameInput;

    @Field(() => GameRankingUpsertWithoutGameInput, {nullable:true})
    upsert?: GameRankingUpsertWithoutGameInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => GameRankingWhereUniqueInput, {nullable:true})
    connect?: GameRankingWhereUniqueInput;

    @Field(() => GameRankingUpdateWithoutGameInput, {nullable:true})
    update?: GameRankingUpdateWithoutGameInput;
}
