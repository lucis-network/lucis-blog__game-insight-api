import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractWhereInput } from './box-contract-where.input';

@InputType()
export class BoxContractListRelationFilter {

    @Field(() => BoxContractWhereInput, {nullable:true})
    every?: BoxContractWhereInput;

    @Field(() => BoxContractWhereInput, {nullable:true})
    some?: BoxContractWhereInput;

    @Field(() => BoxContractWhereInput, {nullable:true})
    none?: BoxContractWhereInput;
}
