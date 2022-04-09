import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BoxContractWhereInput } from './box-contract-where.input';
import { BoxContractOrderByWithRelationAndSearchRelevanceInput } from './box-contract-order-by-with-relation-and-search-relevance.input';
import { BoxContractWhereUniqueInput } from './box-contract-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BoxContractCountAggregateInput } from './box-contract-count-aggregate.input';
import { BoxContractMinAggregateInput } from './box-contract-min-aggregate.input';
import { BoxContractMaxAggregateInput } from './box-contract-max-aggregate.input';

@ArgsType()
export class BoxContractAggregateArgs {

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

    @Field(() => BoxContractCountAggregateInput, {nullable:true})
    _count?: BoxContractCountAggregateInput;

    @Field(() => BoxContractMinAggregateInput, {nullable:true})
    _min?: BoxContractMinAggregateInput;

    @Field(() => BoxContractMaxAggregateInput, {nullable:true})
    _max?: BoxContractMaxAggregateInput;
}
