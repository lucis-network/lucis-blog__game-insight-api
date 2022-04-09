import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainWhereUniqueInput } from './chain-where-unique.input';
import { ChainCreateWithoutCurrenciesInput } from './chain-create-without-currencies.input';

@InputType()
export class ChainCreateOrConnectWithoutCurrenciesInput {

    @Field(() => ChainWhereUniqueInput, {nullable:false})
    where!: ChainWhereUniqueInput;

    @Field(() => ChainCreateWithoutCurrenciesInput, {nullable:false})
    create!: ChainCreateWithoutCurrenciesInput;
}
