import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';
import { BoxContractCreateWithoutChainInput } from './box-contract-create-without-chain.input';

@InputType()
export class BoxContractCreateOrConnectWithoutChainInput {

    @Field(() => BoxContractWhereUniqueInput, {nullable:false})
    where!: BoxContractWhereUniqueInput;

    @Field(() => BoxContractCreateWithoutChainInput, {nullable:false})
    create!: BoxContractCreateWithoutChainInput;
}
