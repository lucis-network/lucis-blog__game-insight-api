import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainWhereUniqueInput } from './chain-where-unique.input';

@ArgsType()
export class DeleteOneChainArgs {

    @Field(() => ChainWhereUniqueInput, {nullable:false})
    where!: ChainWhereUniqueInput;
}
