import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractCreateWithoutChainInput } from './box-contract-create-without-chain.input';
import { BoxContractCreateOrConnectWithoutChainInput } from './box-contract-create-or-connect-without-chain.input';
import { BoxContractCreateManyChainInputEnvelope } from './box-contract-create-many-chain-input-envelope.input';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';

@InputType()
export class BoxContractUncheckedCreateNestedManyWithoutChainInput {

    @Field(() => [BoxContractCreateWithoutChainInput], {nullable:true})
    create?: Array<BoxContractCreateWithoutChainInput>;

    @Field(() => [BoxContractCreateOrConnectWithoutChainInput], {nullable:true})
    connectOrCreate?: Array<BoxContractCreateOrConnectWithoutChainInput>;

    @Field(() => BoxContractCreateManyChainInputEnvelope, {nullable:true})
    createMany?: BoxContractCreateManyChainInputEnvelope;

    @Field(() => [BoxContractWhereUniqueInput], {nullable:true})
    connect?: Array<BoxContractWhereUniqueInput>;
}
