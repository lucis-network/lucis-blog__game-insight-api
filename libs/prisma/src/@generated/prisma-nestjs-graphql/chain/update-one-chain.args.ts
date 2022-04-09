import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainUpdateInput } from './chain-update.input';
import { ChainWhereUniqueInput } from './chain-where-unique.input';

@ArgsType()
export class UpdateOneChainArgs {

    @Field(() => ChainUpdateInput, {nullable:false})
    data!: ChainUpdateInput;

    @Field(() => ChainWhereUniqueInput, {nullable:false})
    where!: ChainWhereUniqueInput;
}
