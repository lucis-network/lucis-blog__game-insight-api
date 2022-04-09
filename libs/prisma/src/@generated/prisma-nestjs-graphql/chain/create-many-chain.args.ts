import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainCreateManyInput } from './chain-create-many.input';

@ArgsType()
export class CreateManyChainArgs {

    @Field(() => [ChainCreateManyInput], {nullable:false})
    data!: Array<ChainCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
