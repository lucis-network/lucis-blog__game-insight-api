import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainUpdateWithoutCurrenciesInput } from './chain-update-without-currencies.input';
import { ChainCreateWithoutCurrenciesInput } from './chain-create-without-currencies.input';

@InputType()
export class ChainUpsertWithoutCurrenciesInput {

    @Field(() => ChainUpdateWithoutCurrenciesInput, {nullable:false})
    update!: ChainUpdateWithoutCurrenciesInput;

    @Field(() => ChainCreateWithoutCurrenciesInput, {nullable:false})
    create!: ChainCreateWithoutCurrenciesInput;
}
