import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDecimalFieldUpdateOperationsInput } from '../prisma/nullable-decimal-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoxContractUpdateOneWithoutBoxPricesInput } from '../box-contract/box-contract-update-one-without-box-prices.input';
import { BoxTypeUpdateOneRequiredWithoutPricesInput } from '../box-type/box-type-update-one-required-without-prices.input';
import { CurrencyUpdateOneRequiredWithoutBoxPricesInput } from '../currency/currency-update-one-required-without-box-prices.input';

@InputType()
export class BoxPriceUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    uid?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    price?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoxContractUpdateOneWithoutBoxPricesInput, {nullable:true})
    contract?: BoxContractUpdateOneWithoutBoxPricesInput;

    @Field(() => BoxTypeUpdateOneRequiredWithoutPricesInput, {nullable:true})
    boxType?: BoxTypeUpdateOneRequiredWithoutPricesInput;

    @Field(() => CurrencyUpdateOneRequiredWithoutBoxPricesInput, {nullable:true})
    currency?: CurrencyUpdateOneRequiredWithoutBoxPricesInput;
}
