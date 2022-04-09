import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BoxPriceBox_type_uidCurrency_uidCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    box_type_uid!: string;

    @Field(() => String, {nullable:false})
    currency_uid!: string;
}
