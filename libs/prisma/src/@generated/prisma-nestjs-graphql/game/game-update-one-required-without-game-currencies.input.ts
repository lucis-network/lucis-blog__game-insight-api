import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameCreateWithoutGame_currenciesInput } from './game-create-without-game-currencies.input';
import { GameCreateOrConnectWithoutGame_currenciesInput } from './game-create-or-connect-without-game-currencies.input';
import { GameUpsertWithoutGame_currenciesInput } from './game-upsert-without-game-currencies.input';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameUpdateWithoutGame_currenciesInput } from './game-update-without-game-currencies.input';

@InputType()
export class GameUpdateOneRequiredWithoutGame_currenciesInput {

    @Field(() => GameCreateWithoutGame_currenciesInput, {nullable:true})
    create?: GameCreateWithoutGame_currenciesInput;

    @Field(() => GameCreateOrConnectWithoutGame_currenciesInput, {nullable:true})
    connectOrCreate?: GameCreateOrConnectWithoutGame_currenciesInput;

    @Field(() => GameUpsertWithoutGame_currenciesInput, {nullable:true})
    upsert?: GameUpsertWithoutGame_currenciesInput;

    @Field(() => GameWhereUniqueInput, {nullable:true})
    connect?: GameWhereUniqueInput;

    @Field(() => GameUpdateWithoutGame_currenciesInput, {nullable:true})
    update?: GameUpdateWithoutGame_currenciesInput;
}
