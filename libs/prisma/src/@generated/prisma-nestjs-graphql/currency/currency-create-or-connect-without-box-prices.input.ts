import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyCreateWithoutBoxPricesInput } from './currency-create-without-box-prices.input';

@InputType()
export class CurrencyCreateOrConnectWithoutBoxPricesInput {

    @Field(() => CurrencyWhereUniqueInput, {nullable:false})
    where!: CurrencyWhereUniqueInput;

    @Field(() => CurrencyCreateWithoutBoxPricesInput, {nullable:false})
    create!: CurrencyCreateWithoutBoxPricesInput;
}
