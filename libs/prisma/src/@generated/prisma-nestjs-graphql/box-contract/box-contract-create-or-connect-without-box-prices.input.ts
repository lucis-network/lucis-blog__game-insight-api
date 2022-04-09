import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';
import { BoxContractCreateWithoutBoxPricesInput } from './box-contract-create-without-box-prices.input';

@InputType()
export class BoxContractCreateOrConnectWithoutBoxPricesInput {

    @Field(() => BoxContractWhereUniqueInput, {nullable:false})
    where!: BoxContractWhereUniqueInput;

    @Field(() => BoxContractCreateWithoutBoxPricesInput, {nullable:false})
    create!: BoxContractCreateWithoutBoxPricesInput;
}
