import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutChainInput } from './currency-create-without-chain.input';
import { CurrencyCreateOrConnectWithoutChainInput } from './currency-create-or-connect-without-chain.input';
import { CurrencyCreateManyChainInputEnvelope } from './currency-create-many-chain-input-envelope.input';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@InputType()
export class CurrencyCreateNestedManyWithoutChainInput {

    @Field(() => [CurrencyCreateWithoutChainInput], {nullable:true})
    create?: Array<CurrencyCreateWithoutChainInput>;

    @Field(() => [CurrencyCreateOrConnectWithoutChainInput], {nullable:true})
    connectOrCreate?: Array<CurrencyCreateOrConnectWithoutChainInput>;

    @Field(() => CurrencyCreateManyChainInputEnvelope, {nullable:true})
    createMany?: CurrencyCreateManyChainInputEnvelope;

    @Field(() => [CurrencyWhereUniqueInput], {nullable:true})
    connect?: Array<CurrencyWhereUniqueInput>;
}
