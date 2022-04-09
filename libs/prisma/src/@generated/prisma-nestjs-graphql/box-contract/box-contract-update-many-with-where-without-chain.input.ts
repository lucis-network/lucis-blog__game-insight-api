import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractScalarWhereInput } from './box-contract-scalar-where.input';
import { BoxContractUpdateManyMutationInput } from './box-contract-update-many-mutation.input';

@InputType()
export class BoxContractUpdateManyWithWhereWithoutChainInput {

    @Field(() => BoxContractScalarWhereInput, {nullable:false})
    where!: BoxContractScalarWhereInput;

    @Field(() => BoxContractUpdateManyMutationInput, {nullable:false})
    data!: BoxContractUpdateManyMutationInput;
}
