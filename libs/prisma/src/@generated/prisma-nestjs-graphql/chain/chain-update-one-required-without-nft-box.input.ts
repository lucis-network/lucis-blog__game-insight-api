import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainCreateWithoutNftBoxInput } from './chain-create-without-nft-box.input';
import { ChainCreateOrConnectWithoutNftBoxInput } from './chain-create-or-connect-without-nft-box.input';
import { ChainUpsertWithoutNftBoxInput } from './chain-upsert-without-nft-box.input';
import { ChainWhereUniqueInput } from './chain-where-unique.input';
import { ChainUpdateWithoutNftBoxInput } from './chain-update-without-nft-box.input';

@InputType()
export class ChainUpdateOneRequiredWithoutNftBoxInput {

    @Field(() => ChainCreateWithoutNftBoxInput, {nullable:true})
    create?: ChainCreateWithoutNftBoxInput;

    @Field(() => ChainCreateOrConnectWithoutNftBoxInput, {nullable:true})
    connectOrCreate?: ChainCreateOrConnectWithoutNftBoxInput;

    @Field(() => ChainUpsertWithoutNftBoxInput, {nullable:true})
    upsert?: ChainUpsertWithoutNftBoxInput;

    @Field(() => ChainWhereUniqueInput, {nullable:true})
    connect?: ChainWhereUniqueInput;

    @Field(() => ChainUpdateWithoutNftBoxInput, {nullable:true})
    update?: ChainUpdateWithoutNftBoxInput;
}
