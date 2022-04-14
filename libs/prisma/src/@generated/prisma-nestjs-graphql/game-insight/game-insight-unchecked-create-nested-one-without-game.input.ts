import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameInsightCreateWithoutGameInput } from './game-insight-create-without-game.input';
import { GameInsightCreateOrConnectWithoutGameInput } from './game-insight-create-or-connect-without-game.input';
import { GameInsightWhereUniqueInput } from './game-insight-where-unique.input';

@InputType()
export class GameInsightUncheckedCreateNestedOneWithoutGameInput {

    @Field(() => GameInsightCreateWithoutGameInput, {nullable:true})
    create?: GameInsightCreateWithoutGameInput;

    @Field(() => GameInsightCreateOrConnectWithoutGameInput, {nullable:true})
    connectOrCreate?: GameInsightCreateOrConnectWithoutGameInput;

    @Field(() => GameInsightWhereUniqueInput, {nullable:true})
    connect?: GameInsightWhereUniqueInput;
}
