import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutGame_currenciesInput } from './game-create-without-game-currencies.input';
import { GameCreateOrConnectWithoutGame_currenciesInput } from './game-create-or-connect-without-game-currencies.input';
import { GameWhereUniqueInput } from './game-where-unique.input';

@InputType()
export class GameCreateNestedOneWithoutGame_currenciesInput {

    @Field(() => GameCreateWithoutGame_currenciesInput, {nullable:true})
    create?: GameCreateWithoutGame_currenciesInput;

    @Field(() => GameCreateOrConnectWithoutGame_currenciesInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutGame_currenciesInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;
}
