import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameCreateWithoutGame_insightInput } from './game-create-without-game-insight.input';

@InputType()
export class GameCreateOrConnectWithoutGame_insightInput {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    where!: GameWhereUniqueInput;

    @Field(() => GameCreateWithoutGame_insightInput, {nullable:false})
    create!: GameCreateWithoutGame_insightInput;
}
