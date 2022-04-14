import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameCreateWithoutGame_statisticsInput } from './game-create-without-game-statistics.input';

@InputType()
export class GameCreateOrConnectWithoutGame_statisticsInput {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    where!: GameWhereUniqueInput;

    @Field(() => GameCreateWithoutGame_statisticsInput, {nullable:false})
    create!: GameCreateWithoutGame_statisticsInput;
}
