import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainUpdateManyMutationInput } from './chain-update-many-mutation.input';
import { ChainWhereInput } from './chain-where.input';

@ArgsType()
export class UpdateManyChainArgs {

    @Field(() => ChainUpdateManyMutationInput, {nullable:false})
    data!: ChainUpdateManyMutationInput;

    @Field(() => ChainWhereInput, {nullable:true})
    where?: ChainWhereInput;
}
