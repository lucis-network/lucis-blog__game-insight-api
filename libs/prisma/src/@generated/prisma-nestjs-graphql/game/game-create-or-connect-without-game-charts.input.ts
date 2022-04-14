import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameCreateWithoutGame_chartsInput } from './game-create-without-game-charts.input';

@InputType()
export class GameCreateOrConnectWithoutGame_chartsInput {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    where!: GameWhereUniqueInput;

    @Field(() => GameCreateWithoutGame_chartsInput, {nullable:false})
    create!: GameCreateWithoutGame_chartsInput;
}
