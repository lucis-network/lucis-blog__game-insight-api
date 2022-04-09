import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceUpdateWithoutCurrencyInput } from './box-price-update-without-currency.input';
import { BoxPriceCreateWithoutCurrencyInput } from './box-price-create-without-currency.input';

@InputType()
export class BoxPriceUpsertWithWhereUniqueWithoutCurrencyInput {

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;

    @Field(() => BoxPriceUpdateWithoutCurrencyInput, {nullable:false})
    update!: BoxPriceUpdateWithoutCurrencyInput;

    @Field(() => BoxPriceCreateWithoutCurrencyInput, {nullable:false})
    create!: BoxPriceCreateWithoutCurrencyInput;
}
