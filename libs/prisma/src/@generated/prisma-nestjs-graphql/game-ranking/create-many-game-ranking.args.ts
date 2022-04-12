import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameRankingCreateManyInput } from './game-ranking-create-many.input';

@ArgsType()
export class CreateManyGameRankingArgs {

    @Field(() => [GameRankingCreateManyInput], {nullable:false})
    data!: Array<GameRankingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
