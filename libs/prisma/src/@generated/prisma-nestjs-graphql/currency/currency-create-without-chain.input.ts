import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceCreateNestedManyWithoutCurrencyInput } from '../box-price/box-price-create-nested-many-without-currency.input';

@InputType()
export class CurrencyCreateWithoutChainInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:false})
    symbol!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    owner?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => BoxPriceCreateNestedManyWithoutCurrencyInput, {nullable:true})
    boxPrices?: BoxPriceCreateNestedManyWithoutCurrencyInput;
}
