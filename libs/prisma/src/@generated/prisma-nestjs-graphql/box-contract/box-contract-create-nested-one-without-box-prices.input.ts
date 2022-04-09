import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractCreateWithoutBoxPricesInput } from './box-contract-create-without-box-prices.input';
import { BoxContractCreateOrConnectWithoutBoxPricesInput } from './box-contract-create-or-connect-without-box-prices.input';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';

@InputType()
export class BoxContractCreateNestedOneWithoutBoxPricesInput {

    @Field(() => BoxContractCreateWithoutBoxPricesInput, {nullable:true})
    create?: BoxContractCreateWithoutBoxPricesInput;

    @Field(() => BoxContractCreateOrConnectWithoutBoxPricesInput, {nullable:true})
    connectOrCreate?: BoxContractCreateOrConnectWithoutBoxPricesInput;

    @Field(() => BoxContractWhereUniqueInput, {nullable:true})
    connect?: BoxContractWhereUniqueInput;
}
