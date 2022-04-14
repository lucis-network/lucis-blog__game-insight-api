import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutGame_rankingInput } from './game-create-without-game-ranking.input';
import { GameCreateOrConnectWithoutGame_rankingInput } from './game-create-or-connect-without-game-ranking.input';
import { GameWhereUniqueInput } from './game-where-unique.input';

@InputType()
export class GameCreateNestedOneWithoutGame_rankingInput {

    @Field(() => GameCreateWithoutGame_rankingInput, {nullable:true})
    create?: GameCreateWithoutGame_rankingInput;

    @Field(() => GameCreateOrConnectWithoutGame_rankingInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutGame_rankingInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;
}
