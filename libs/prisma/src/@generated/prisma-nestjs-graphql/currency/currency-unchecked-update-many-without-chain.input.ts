import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutChainInput } from './currency-create-without-chain.input';
import { CurrencyCreateOrConnectWithoutChainInput } from './currency-create-or-connect-without-chain.input';
import { CurrencyUpsertWithWhereUniqueWithoutChainInput } from './currency-upsert-with-where-unique-without-chain.input';
import { CurrencyCreateManyChainInputEnvelope } from './currency-create-many-chain-input-envelope.input';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyUpdateWithWhereUniqueWithoutChainInput } from './currency-update-with-where-unique-without-chain.input';
import { CurrencyUpdateManyWithWhereWithoutChainInput } from './currency-update-many-with-where-without-chain.input';
import { CurrencyScalarWhereInput } from './currency-scalar-where.input';

@InputType()
export class CurrencyUncheckedUpdateManyWithoutChainInput {

    @Field(() => [CurrencyCreateWithoutChainInput], {nullable:true})
    create?: Array<CurrencyCreateWithoutChainInput>;

    @Field(() => [CurrencyCreateOrConnectWithoutChainInput], {nullable:true})
    connectOrCreate?: Array<CurrencyCreateOrConnectWithoutChainInput>;

    @Field(() => [CurrencyUpsertWithWhereUniqueWithoutChainInput], {nullable:true})
    upsert?: Array<CurrencyUpsertWithWhereUniqueWithoutChainInput>;

    @Field(() => CurrencyCreateManyChainInputEnvelope, {nullable:true})
    createMany?: CurrencyCreateManyChainInputEnvelope;

    @Field(() => [CurrencyWhereUniqueInput], {nullable:true})
    set?: Array<CurrencyWhereUniqueInput>;

    @Field(() => [CurrencyWhereUniqueInput], {nullable:true})
    disconnect?: Array<CurrencyWhereUniqueInput>;

    @Field(() => [CurrencyWhereUniqueInput], {nullable:true})
    delete?: Array<CurrencyWhereUniqueInput>;

    @Field(() => [CurrencyWhereUniqueInput], {nullable:true})
    connect?: Array<CurrencyWhereUniqueInput>;

    @Field(() => [CurrencyUpdateWithWhereUniqueWithoutChainInput], {nullable:true})
    update?: Array<CurrencyUpdateWithWhereUniqueWithoutChainInput>;

    @Field(() => [CurrencyUpdateManyWithWhereWithoutChainInput], {nullable:true})
    updateMany?: Array<CurrencyUpdateManyWithWhereWithoutChainInput>;

    @Field(() => [CurrencyScalarWhereInput], {nullable:true})
    deleteMany?: Array<CurrencyScalarWhereInput>;
}
