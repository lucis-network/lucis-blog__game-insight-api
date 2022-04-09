import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainWhereUniqueInput } from './chain-where-unique.input';
import { ChainCreateWithoutNftBoxInput } from './chain-create-without-nft-box.input';

@InputType()
export class ChainCreateOrConnectWithoutNftBoxInput {

    @Field(() => ChainWhereUniqueInput, {nullable:false})
    where!: ChainWhereUniqueInput;

    @Field(() => ChainCreateWithoutNftBoxInput, {nullable:false})
    create!: ChainCreateWithoutNftBoxInput;
}
