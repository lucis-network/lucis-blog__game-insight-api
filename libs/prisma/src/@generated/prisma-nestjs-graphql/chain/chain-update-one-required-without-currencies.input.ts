import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainCreateWithoutCurrenciesInput } from './chain-create-without-currencies.input';
import { ChainCreateOrConnectWithoutCurrenciesInput } from './chain-create-or-connect-without-currencies.input';
import { ChainUpsertWithoutCurrenciesInput } from './chain-upsert-without-currencies.input';
import { ChainWhereUniqueInput } from './chain-where-unique.input';
import { ChainUpdateWithoutCurrenciesInput } from './chain-update-without-currencies.input';

@InputType()
export class ChainUpdateOneRequiredWithoutCurrenciesInput {

    @Field(() => ChainCreateWithoutCurrenciesInput, {nullable:true})
    create?: ChainCreateWithoutCurrenciesInput;

    @Field(() => ChainCreateOrConnectWithoutCurrenciesInput, {nullable:true})
    connectOrCreate?: ChainCreateOrConnectWithoutCurrenciesInput;

    @Field(() => ChainUpsertWithoutCurrenciesInput, {nullable:true})
    upsert?: ChainUpsertWithoutCurrenciesInput;

    @Field(() => ChainWhereUniqueInput, {nullable:true})
    connect?: ChainWhereUniqueInput;

    @Field(() => ChainUpdateWithoutCurrenciesInput, {nullable:true})
    update?: ChainUpdateWithoutCurrenciesInput;
}
