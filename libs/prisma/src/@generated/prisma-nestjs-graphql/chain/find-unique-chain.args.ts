import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainWhereUniqueInput } from './chain-where-unique.input';

@ArgsType()
export class FindUniqueChainArgs {

    @Field(() => ChainWhereUniqueInput, {nullable:false})
    where!: ChainWhereUniqueInput;
}
