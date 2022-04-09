import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxPriceUncheckedCreateNestedManyWithoutContractInput } from '../box-price/box-price-unchecked-create-nested-many-without-contract.input';

@InputType()
export class BoxContractUncheckedCreateWithoutChainInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:true})
    owner?: string;

    @Field(() => String, {nullable:true})
    currency_symbol?: string;

    @Field(() => String, {nullable:true})
    admin_address?: string;

    @Field(() => String, {nullable:true})
    admin_prv_key?: string;

    @Field(() => Boolean, {nullable:true})
    is_transfered?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => BoxPriceUncheckedCreateNestedManyWithoutContractInput, {nullable:true})
    boxPrices?: BoxPriceUncheckedCreateNestedManyWithoutContractInput;
}
