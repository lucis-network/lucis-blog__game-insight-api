import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutGame_insightInput } from './game-create-without-game-insight.input';
import { GameCreateOrConnectWithoutGame_insightInput } from './game-create-or-connect-without-game-insight.input';
import { GameWhereUniqueInput } from './game-where-unique.input';

@InputType()
export class GameCreateNestedOneWithoutGame_insightInput {

    @Field(() => GameCreateWithoutGame_insightInput, {nullable:true})
    create?: GameCreateWithoutGame_insightInput;

    @Field(() => GameCreateOrConnectWithoutGame_insightInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutGame_insightInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;
}
