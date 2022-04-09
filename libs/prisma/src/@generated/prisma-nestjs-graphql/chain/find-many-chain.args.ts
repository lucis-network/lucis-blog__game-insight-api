import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChainWhereInput } from './chain-where.input';
import { ChainOrderByWithRelationAndSearchRelevanceInput } from './chain-order-by-with-relation-and-search-relevance.input';
import { ChainWhereUniqueInput } from './chain-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChainScalarFieldEnum } from './chain-scalar-field.enum';

@ArgsType()
export class FindManyChainArgs {

    @Field(() => ChainWhereInput, {nullable:true})
    where?: ChainWhereInput;

    @Field(() => [ChainOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ChainOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ChainWhereUniqueInput, {nullable:true})
    cursor?: ChainWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChainScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ChainScalarFieldEnum>;
}
