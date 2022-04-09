import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceBox_type_uidCurrency_uidCompoundUniqueInput } from './box-price-box-type-uid-currency-uid-compound-unique.input';

@InputType()
export class BoxPriceWhereUniqueInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => BoxPriceBox_type_uidCurrency_uidCompoundUniqueInput, {nullable:true})
    box_type_uid_currency_uid?: BoxPriceBox_type_uidCurrency_uidCompoundUniqueInput;
}
