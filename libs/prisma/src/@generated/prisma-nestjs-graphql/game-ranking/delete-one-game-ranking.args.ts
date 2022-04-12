import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRankingWhereUniqueInput } from './game-ranking-where-unique.input';

@ArgsType()
export class DeleteOneGameRankingArgs {

    @Field(() => GameRankingWhereUniqueInput, {nullable:false})
    where!: GameRankingWhereUniqueInput;
}
