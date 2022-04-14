import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRankingWhereUniqueInput } from './game-ranking-where-unique.input';
import { GameRankingCreateInput } from './game-ranking-create.input';
import { GameRankingUpdateInput } from './game-ranking-update.input';

@ArgsType()
export class UpsertOneGameRankingArgs {

    @Field(() => GameRankingWhereUniqueInput, {nullable:false})
    where!: GameRankingWhereUniqueInput;

    @Field(() => GameRankingCreateInput, {nullable:false})
    create!: GameRankingCreateInput;

    @Field(() => GameRankingUpdateInput, {nullable:false})
    update!: GameRankingUpdateInput;
}
