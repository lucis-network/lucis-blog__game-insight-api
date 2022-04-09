import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';

@ArgsType()
export class FindUniqueBoxContractArgs {

    @Field(() => BoxContractWhereUniqueInput, {nullable:false})
    where!: BoxContractWhereUniqueInput;
}
