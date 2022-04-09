import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';
import { BoxContractCreateInput } from './box-contract-create.input';
import { BoxContractUpdateInput } from './box-contract-update.input';

@ArgsType()
export class UpsertOneBoxContractArgs {

    @Field(() => BoxContractWhereUniqueInput, {nullable:false})
    where!: BoxContractWhereUniqueInput;

    @Field(() => BoxContractCreateInput, {nullable:false})
    create!: BoxContractCreateInput;

    @Field(() => BoxContractUpdateInput, {nullable:false})
    update!: BoxContractUpdateInput;
}
