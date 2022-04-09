import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainWhereInput } from './chain-where.input';

@ArgsType()
export class DeleteManyChainArgs {

    @Field(() => ChainWhereInput, {nullable:true})
    where?: ChainWhereInput;
}
