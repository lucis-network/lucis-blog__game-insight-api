import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameCreateWithoutGame_currenciesInput } from './game-create-without-game-currencies.input';

@InputType()
export class GameCreateOrConnectWithoutGame_currenciesInput {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    where!: GameWhereUniqueInput;

    @Field(() => GameCreateWithoutGame_currenciesInput, {nullable:false})
    create!: GameCreateWithoutGame_currenciesInput;
}
