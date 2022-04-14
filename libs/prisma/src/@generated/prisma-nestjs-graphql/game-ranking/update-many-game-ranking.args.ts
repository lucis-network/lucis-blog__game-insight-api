import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRankingUpdateManyMutationInput } from './game-ranking-update-many-mutation.input';
import { GameRankingWhereInput } from './game-ranking-where.input';

@ArgsType()
export class UpdateManyGameRankingArgs {

    @Field(() => GameRankingUpdateManyMutationInput, {nullable:false})
    data!: GameRankingUpdateManyMutationInput;

    @Field(() => GameRankingWhereInput, {nullable:true})
    where?: GameRankingWhereInput;
}
