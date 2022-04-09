import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainCreateWithoutCurrenciesInput } from './chain-create-without-currencies.input';
import { ChainCreateOrConnectWithoutCurrenciesInput } from './chain-create-or-connect-without-currencies.input';
import { ChainWhereUniqueInput } from './chain-where-unique.input';

@InputType()
export class ChainCreateNestedOneWithoutCurrenciesInput {

    @Field(() => ChainCreateWithoutCurrenciesInput, {nullable:true})
    create?: ChainCreateWithoutCurrenciesInput;

    @Field(() => ChainCreateOrConnectWithoutCurrenciesInput, {nullable:true})
    connectOrCreate?: ChainCreateOrConnectWithoutCurrenciesInput;

    @Field(() => ChainWhereUniqueInput, {nullable:true})
    connect?: ChainWhereUniqueInput;
}
