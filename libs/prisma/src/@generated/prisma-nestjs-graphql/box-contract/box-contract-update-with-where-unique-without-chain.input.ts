import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';
import { BoxContractUpdateWithoutChainInput } from './box-contract-update-without-chain.input';

@InputType()
export class BoxContractUpdateWithWhereUniqueWithoutChainInput {

    @Field(() => BoxContractWhereUniqueInput, {nullable:false})
    where!: BoxContractWhereUniqueInput;

    @Field(() => BoxContractUpdateWithoutChainInput, {nullable:false})
    data!: BoxContractUpdateWithoutChainInput;
}
