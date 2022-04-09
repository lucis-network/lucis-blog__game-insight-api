import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceWhereUniqueInput } from './box-price-where-unique.input';
import { BoxPriceCreateWithoutCurrencyInput } from './box-price-create-without-currency.input';

@InputType()
export class BoxPriceCreateOrConnectWithoutCurrencyInput {

    @Field(() => BoxPriceWhereUniqueInput, {nullable:false})
    where!: BoxPriceWhereUniqueInput;

    @Field(() => BoxPriceCreateWithoutCurrencyInput, {nullable:false})
    create!: BoxPriceCreateWithoutCurrencyInput;
}
