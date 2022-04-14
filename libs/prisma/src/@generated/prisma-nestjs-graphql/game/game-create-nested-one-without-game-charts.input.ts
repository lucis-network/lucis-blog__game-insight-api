import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutGame_chartsInput } from './game-create-without-game-charts.input';
import { GameCreateOrConnectWithoutGame_chartsInput } from './game-create-or-connect-without-game-charts.input';
import { GameWhereUniqueInput } from './game-where-unique.input';

@InputType()
export class GameCreateNestedOneWithoutGame_chartsInput {

    @Field(() => GameCreateWithoutGame_chartsInput, {nullable:true})
    create?: GameCreateWithoutGame_chartsInput;

    @Field(() => GameCreateOrConnectWithoutGame_chartsInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutGame_chartsInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;
}
