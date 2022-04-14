import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutGame_statisticsInput } from './game-create-without-game-statistics.input';
import { GameCreateOrConnectWithoutGame_statisticsInput } from './game-create-or-connect-without-game-statistics.input';
import { GameWhereUniqueInput } from './game-where-unique.input';

@InputType()
export class GameCreateNestedOneWithoutGame_statisticsInput {

    @Field(() => GameCreateWithoutGame_statisticsInput, {nullable:true})
    create?: GameCreateWithoutGame_statisticsInput;

    @Field(() => GameCreateOrConnectWithoutGame_statisticsInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutGame_statisticsInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;
}
