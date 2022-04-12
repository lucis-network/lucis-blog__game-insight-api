import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameCreateWithoutGame_rankingInput } from './game-create-without-game-ranking.input';

@InputType()
export class GameCreateOrConnectWithoutGame_rankingInput {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    where!: GameWhereUniqueInput;

    @Field(() => GameCreateWithoutGame_rankingInput, {nullable:false})
    create!: GameCreateWithoutGame_rankingInput;
}
