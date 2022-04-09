import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyUpdateWithoutBoxPricesInput } from './currency-update-without-box-prices.input';
import { CurrencyCreateWithoutBoxPricesInput } from './currency-create-without-box-prices.input';

@InputType()
export class CurrencyUpsertWithoutBoxPricesInput {

    @Field(() => CurrencyUpdateWithoutBoxPricesInput, {nullable:false})
    update!: CurrencyUpdateWithoutBoxPricesInput;

    @Field(() => CurrencyCreateWithoutBoxPricesInput, {nullable:false})
    create!: CurrencyCreateWithoutBoxPricesInput;
}
