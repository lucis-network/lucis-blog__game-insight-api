import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutBoxPricesInput } from './currency-create-without-box-prices.input';
import { CurrencyCreateOrConnectWithoutBoxPricesInput } from './currency-create-or-connect-without-box-prices.input';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@InputType()
export class CurrencyCreateNestedOneWithoutBoxPricesInput {

    @Field(() => CurrencyCreateWithoutBoxPricesInput, {nullable:true})
    create?: CurrencyCreateWithoutBoxPricesInput;

    @Field(() => CurrencyCreateOrConnectWithoutBoxPricesInput, {nullable:true})
    connectOrCreate?: CurrencyCreateOrConnectWithoutBoxPricesInput;

    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    connect?: CurrencyWhereUniqueInput;
}
