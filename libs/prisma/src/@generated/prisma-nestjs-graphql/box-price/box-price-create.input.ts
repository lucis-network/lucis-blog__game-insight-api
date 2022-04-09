import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { BoxContractCreateNestedOneWithoutBoxPricesInput } from '../box-contract/box-contract-create-nested-one-without-box-prices.input';
import { BoxTypeCreateNestedOneWithoutPricesInput } from '../box-type/box-type-create-nested-one-without-prices.input';
import { CurrencyCreateNestedOneWithoutBoxPricesInput } from '../currency/currency-create-nested-one-without-box-prices.input';

@InputType()
export class BoxPriceCreateInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: any;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => BoxContractCreateNestedOneWithoutBoxPricesInput, {nullable:true})
    contract?: BoxContractCreateNestedOneWithoutBoxPricesInput;

    @Field(() => BoxTypeCreateNestedOneWithoutPricesInput, {nullable:false})
    boxType!: BoxTypeCreateNestedOneWithoutPricesInput;

    @Field(() => CurrencyCreateNestedOneWithoutBoxPricesInput, {nullable:false})
    currency!: CurrencyCreateNestedOneWithoutBoxPricesInput;
}
