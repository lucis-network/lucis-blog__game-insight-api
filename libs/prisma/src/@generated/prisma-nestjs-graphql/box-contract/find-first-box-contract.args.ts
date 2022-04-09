import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxContractWhereInput } from './box-contract-where.input';
import { BoxContractOrderByWithRelationAndSearchRelevanceInput } from './box-contract-order-by-with-relation-and-search-relevance.input';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxContractScalarFieldEnum } from './box-contract-scalar-field.enum';

@ArgsType()
export class FindFirstBoxContractArgs {

    @Field(() => BoxContractWhereInput, {nullable:true})
    where?: BoxContractWhereInput;

    @Field(() => [BoxContractOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<BoxContractOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => BoxContractWhereUniqueInput, {nullable:true})
    cursor?: BoxContractWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BoxContractScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BoxContractScalarFieldEnum>;
}
