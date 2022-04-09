import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainSymbol } from '../prisma/chain-symbol.enum';
import { Int } from '@nestjs/graphql';
import { BoxContractUncheckedCreateNestedManyWithoutChainInput } from '../box-contract/box-contract-unchecked-create-nested-many-without-chain.input';

@InputType()
export class ChainUncheckedCreateWithoutCurrenciesInput {

    @Field(() => ChainSymbol, {nullable:false})
    symbol!: keyof typeof ChainSymbol;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => Int, {nullable:true})
    chain_id?: number;

    @Field(() => String, {nullable:true})
    rpc_url?: string;

    @Field(() => Boolean, {nullable:true})
    status?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => BoxContractUncheckedCreateNestedManyWithoutChainInput, {nullable:true})
    nftBox?: BoxContractUncheckedCreateNestedManyWithoutChainInput;
}
