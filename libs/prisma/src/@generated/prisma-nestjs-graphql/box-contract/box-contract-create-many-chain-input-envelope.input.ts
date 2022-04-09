import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractCreateManyChainInput } from './box-contract-create-many-chain.input';

@InputType()
export class BoxContractCreateManyChainInputEnvelope {

    @Field(() => [BoxContractCreateManyChainInput], {nullable:false})
    data!: Array<BoxContractCreateManyChainInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
