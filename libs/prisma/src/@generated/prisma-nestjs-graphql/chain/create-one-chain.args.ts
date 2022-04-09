import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainCreateInput } from './chain-create.input';

@ArgsType()
export class CreateOneChainArgs {

    @Field(() => ChainCreateInput, {nullable:false})
    data!: ChainCreateInput;
}
