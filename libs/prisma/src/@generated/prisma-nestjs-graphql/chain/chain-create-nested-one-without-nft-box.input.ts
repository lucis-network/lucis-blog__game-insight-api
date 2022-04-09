import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainCreateWithoutNftBoxInput } from './chain-create-without-nft-box.input';
import { ChainCreateOrConnectWithoutNftBoxInput } from './chain-create-or-connect-without-nft-box.input';
import { ChainWhereUniqueInput } from './chain-where-unique.input';

@InputType()
export class ChainCreateNestedOneWithoutNftBoxInput {

    @Field(() => ChainCreateWithoutNftBoxInput, {nullable:true})
    create?: ChainCreateWithoutNftBoxInput;

    @Field(() => ChainCreateOrConnectWithoutNftBoxInput, {nullable:true})
    connectOrCreate?: ChainCreateOrConnectWithoutNftBoxInput;

    @Field(() => ChainWhereUniqueInput, {nullable:true})
    connect?: ChainWhereUniqueInput;
}
