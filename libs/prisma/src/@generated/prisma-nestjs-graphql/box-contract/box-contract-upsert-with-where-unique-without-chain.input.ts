import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';
import { BoxContractUpdateWithoutChainInput } from './box-contract-update-without-chain.input';
import { BoxContractCreateWithoutChainInput } from './box-contract-create-without-chain.input';

@InputType()
export class BoxContractUpsertWithWhereUniqueWithoutChainInput {

    @Field(() => BoxContractWhereUniqueInput, {nullable:false})
    where!: BoxContractWhereUniqueInput;

    @Field(() => BoxContractUpdateWithoutChainInput, {nullable:false})
    update!: BoxContractUpdateWithoutChainInput;

    @Field(() => BoxContractCreateWithoutChainInput, {nullable:false})
    create!: BoxContractCreateWithoutChainInput;
}
