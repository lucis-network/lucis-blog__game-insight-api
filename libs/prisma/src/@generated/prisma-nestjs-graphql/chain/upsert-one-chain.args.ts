import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainWhereUniqueInput } from './chain-where-unique.input';
import { ChainCreateInput } from './chain-create.input';
import { ChainUpdateInput } from './chain-update.input';

@ArgsType()
export class UpsertOneChainArgs {

    @Field(() => ChainWhereUniqueInput, {nullable:false})
    where!: ChainWhereUniqueInput;

    @Field(() => ChainCreateInput, {nullable:false})
    create!: ChainCreateInput;

    @Field(() => ChainUpdateInput, {nullable:false})
    update!: ChainUpdateInput;
}
