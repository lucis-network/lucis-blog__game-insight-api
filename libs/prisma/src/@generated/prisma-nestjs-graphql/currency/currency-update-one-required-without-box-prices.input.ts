import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutBoxPricesInput } from './currency-create-without-box-prices.input';
import { CurrencyCreateOrConnectWithoutBoxPricesInput } from './currency-create-or-connect-without-box-prices.input';
import { CurrencyUpsertWithoutBoxPricesInput } from './currency-upsert-without-box-prices.input';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyUpdateWithoutBoxPricesInput } from './currency-update-without-box-prices.input';

@InputType()
export class CurrencyUpdateOneRequiredWithoutBoxPricesInput {

    @Field(() => CurrencyCreateWithoutBoxPricesInput, {nullable:true})
    create?: CurrencyCreateWithoutBoxPricesInput;

    @Field(() => CurrencyCreateOrConnectWithoutBoxPricesInput, {nullable:true})
    connectOrCreate?: CurrencyCreateOrConnectWithoutBoxPricesInput;

    @Field(() => CurrencyUpsertWithoutBoxPricesInput, {nullable:true})
    upsert?: CurrencyUpsertWithoutBoxPricesInput;

    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    connect?: CurrencyWhereUniqueInput;

    @Field(() => CurrencyUpdateWithoutBoxPricesInput, {nullable:true})
    update?: CurrencyUpdateWithoutBoxPricesInput;
}
