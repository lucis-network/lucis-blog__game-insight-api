import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameInsightWhereUniqueInput } from './game-insight-where-unique.input';
import { GameInsightCreateWithoutGameInput } from './game-insight-create-without-game.input';

@InputType()
export class GameInsightCreateOrConnectWithoutGameInput {

    @Field(() => GameInsightWhereUniqueInput, {nullable:false})
    where!: GameInsightWhereUniqueInput;

    @Field(() => GameInsightCreateWithoutGameInput, {nullable:false})
    create!: GameInsightCreateWithoutGameInput;
}
