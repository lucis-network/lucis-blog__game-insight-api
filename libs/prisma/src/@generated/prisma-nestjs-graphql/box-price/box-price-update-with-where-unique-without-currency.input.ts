import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceUpdateWithoutCurrencyInput } from './box-price-update-without-currency.input';

@InputType()
export class BoxPriceUpdateWithWhereUniqueWithoutCurrencyInput {

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;

    @Field(() => BoxPriceUpdateWithoutCurrencyInput, {nullable:false})
    data!: BoxPriceUpdateWithoutCurrencyInput;
}
