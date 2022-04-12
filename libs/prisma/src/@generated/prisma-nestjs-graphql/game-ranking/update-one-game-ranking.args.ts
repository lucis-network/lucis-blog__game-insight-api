import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRankingUpdateInput } from './game-ranking-update.input';
import { GameRankingWhereUniqueInput } from './game-ranking-where-unique.input';

@ArgsType()
export class UpdateOneGameRankingArgs {

    @Field(() => GameRankingUpdateInput, {nullable:false})
    data!: GameRankingUpdateInput;

    @Field(() => GameRankingWhereUniqueInput, {nullable:false})
    where!: GameRankingWhereUniqueInput;
}
