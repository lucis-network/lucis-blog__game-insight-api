import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChainUpdateWithoutNftBoxInput } from './chain-update-without-nft-box.input';
import { ChainCreateWithoutNftBoxInput } from './chain-create-without-nft-box.input';

@InputType()
export class ChainUpsertWithoutNftBoxInput {

    @Field(() => ChainUpdateWithoutNftBoxInput, {nullable:false})
    update!: ChainUpdateWithoutNftBoxInput;

    @Field(() => ChainCreateWithoutNftBoxInput, {nullable:false})
    create!: ChainCreateWithoutNftBoxInput;
}
