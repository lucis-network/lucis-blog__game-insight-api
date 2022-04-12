import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRankingWhereInput } from './game-ranking-where.input';

@ArgsType()
export class DeleteManyGameRankingArgs {

    @Field(() => GameRankingWhereInput, {nullable:true})
    where?: GameRankingWhereInput;
}
