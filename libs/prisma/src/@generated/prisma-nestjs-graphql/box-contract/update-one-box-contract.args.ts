import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxContractUpdateInput } from './box-contract-update.input';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';

@ArgsType()
export class UpdateOneBoxContractArgs {

    @Field(() => BoxContractUpdateInput, {nullable:false})
    data!: BoxContractUpdateInput;

    @Field(() => BoxContractWhereUniqueInput, {nullable:false})
    where!: BoxContractWhereUniqueInput;
}
