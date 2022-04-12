import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GameUpdateWithoutGame_currenciesInput } from './game-update-without-game-currencies.input';
import { GameCreateWithoutGame_currenciesInput } from './game-create-without-game-currencies.input';

@InputType()
export class GameUpsertWithoutGame_currenciesInput {

    @Field(() => GameUpdateWithoutGame_currenciesInput, {nullable:false})
    update!: GameUpdateWithoutGame_currenciesInput;

    @Field(() => GameCreateWithoutGame_currenciesInput, {nullable:false})
    create!: GameCreateWithoutGame_currenciesInput;
}
