import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxContractUpdateManyMutationInput } from './box-contract-update-many-mutation.input';
import { BoxContractWhereInput } from './box-contract-where.input';

@ArgsType()
export class UpdateManyBoxContractArgs {

    @Field(() => BoxContractUpdateManyMutationInput, {nullable:false})
    data!: BoxContractUpdateManyMutationInput;

    @Field(() => BoxContractWhereInput, {nullable:true})
    where?: BoxContractWhereInput;
}
