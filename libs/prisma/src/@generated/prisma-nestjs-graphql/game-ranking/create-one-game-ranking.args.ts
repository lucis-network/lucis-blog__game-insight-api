import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRankingCreateInput } from './game-ranking-create.input';

@ArgsType()
export class CreateOneGameRankingArgs {

    @Field(() => GameRankingCreateInput, {nullable:false})
    data!: GameRankingCreateInput;
}
