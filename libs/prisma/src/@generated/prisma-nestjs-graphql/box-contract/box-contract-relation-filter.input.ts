import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoxContractWhereInput } from './box-contract-where.input';

@InputType()
export class BoxContractRelationFilter {

    @Field(() => BoxContractWhereInput, {nullable:true})
    is?: BoxContractWhereInput;

    @Field(() => BoxContractWhereInput, {nullable:true})
    isNot?: BoxContractWhereInput;
}
