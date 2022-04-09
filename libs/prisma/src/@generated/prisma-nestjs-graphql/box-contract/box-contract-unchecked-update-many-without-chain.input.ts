import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractCreateWithoutChainInput } from './box-contract-create-without-chain.input';
import { BoxContractCreateOrConnectWithoutChainInput } from './box-contract-create-or-connect-without-chain.input';
import { BoxContractUpsertWithWhereUniqueWithoutChainInput } from './box-contract-upsert-with-where-unique-without-chain.input';
import { BoxContractCreateManyChainInputEnvelope } from './box-contract-create-many-chain-input-envelope.input';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';
import { BoxContractUpdateWithWhereUniqueWithoutChainInput } from './box-contract-update-with-where-unique-without-chain.input';
import { BoxContractUpdateManyWithWhereWithoutChainInput } from './box-contract-update-many-with-where-without-chain.input';
import { BoxContractScalarWhereInput } from './box-contract-scalar-where.input';

@InputType()
export class BoxContractUncheckedUpdateManyWithoutChainInput {

    @Field(() => [BoxContractCreateWithoutChainInput], {nullable:true})
    create?: Array<BoxContractCreateWithoutChainInput>;

    @Field(() => [BoxContractCreateOrConnectWithoutChainInput], {nullable:true})
    connectOrCreate?: Array<BoxContractCreateOrConnectWithoutChainInput>;

    @Field(() => [BoxContractUpsertWithWhereUniqueWithoutChainInput], {nullable:true})
    upsert?: Array<BoxContractUpsertWithWhereUniqueWithoutChainInput>;

    @Field(() => BoxContractCreateManyChainInputEnvelope, {nullable:true})
    createMany?: BoxContractCreateManyChainInputEnvelope;

    @Field(() => [BoxContractWhereUniqueInput], {nullable:true})
    set?: Array<BoxContractWhereUniqueInput>;

    @Field(() => [BoxContractWhereUniqueInput], {nullable:true})
    disconnect?: Array<BoxContractWhereUniqueInput>;

    @Field(() => [BoxContractWhereUniqueInput], {nullable:true})
    delete?: Array<BoxContractWhereUniqueInput>;

    @Field(() => [BoxContractWhereUniqueInput], {nullable:true})
    connect?: Array<BoxContractWhereUniqueInput>;

    @Field(() => [BoxContractUpdateWithWhereUniqueWithoutChainInput], {nullable:true})
    update?: Array<BoxContractUpdateWithWhereUniqueWithoutChainInput>;

    @Field(() => [BoxContractUpdateManyWithWhereWithoutChainInput], {nullable:true})
    updateMany?: Array<BoxContractUpdateManyWithWhereWithoutChainInput>;

    @Field(() => [BoxContractScalarWhereInput], {nullable:true})
    deleteMany?: Array<BoxContractScalarWhereInput>;
}
